const express=require('express')
const router=express.Router()
const {userSignup,userLogin,findUser}= require('../controllers/user')


router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/:id',findUser)

module.exports=router