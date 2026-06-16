
const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/userImg')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.fieldname
      cb(null, filename)
    }
  })
  
  const dp = multer({ storage: storage })


const userSignup=async(req,res)=>{
    const {password,email,name}=req.body
   
    if(!email || !password || !name){
        return res.json({message:"email,name and password required"})
    }
    const hashpw= await bcrypt.hash(password,10)
    const userdtl=await User.create({
       name, email,password:hashpw

    })
    const token = await jwt.sign({email,id:userdtl._id},process.env.SECRET_KEY)
    res.json({token,user:userdtl})



}
 const userLogin=async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    const user= await User.findOne({email})
    const pswdcheck= await bcrypt.compare(password,user.password)
    if(user&&pswdcheck){
        const token=jwt.sign({email,id:user._id},process.env.SECRET_KEY)
        res.json({token,user})
    }else{
        res.json({
            message:"invalid email or password"
        })
    }

 }
 const findUser=async(req,res)=>{
 try{
       const userdtl=await User.findById(req.params.id)
    if(userdtl){
     res.json({userdtl})
    }else{
        res.json({message:"user do not exist"})
    }

 }catch(err){
    res.json({error:err.message})

 }
   


 }


 const editUser=async(req,res)=>{
    const updateData={
        name:req.body.name,
        email:req.body.email
    }
    if(req.file){
        updateData.coverImage=req.file.filename
    }
      const updatedUser= await User.findByIdAndUpdate(req.params.id,updateData,{returnDocument:"after"})
        res.json(updatedUser)
 }

 
module.exports={userSignup,userLogin,findUser,editUser,dp}