const express=require('express')
const router=express.Router()
const {userSignup,userLogin,findUser,editUser,dp}= require('../controllers/user')


router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/:id',findUser)
router.put('/edit/:id',dp.single('file'),editUser)

module.exports=router