const express=require('express')
const router=express.Router()

router.use('/signup',require('./signup.route.js'))


module.exports=router

