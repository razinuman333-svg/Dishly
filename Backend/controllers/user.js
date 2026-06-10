
const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userSignup=async(req,res)=>{
    const {password,email}=req.body
   
    if(!email || !password){
        return res.json({message:"email and password required"})
    }
    const hashpw= await bcrypt.hash(password,10)
    const userdtl=await User.create({
        email,password:hashpw

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
module.exports={userSignup,userLogin,findUser}