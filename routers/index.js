const express=require('express')
const router=express.Router()

router.use('/signup',require('./signup.route.js'))
router.use('/login',require('./login.js'))
router.use('/update',require('./updateData.js'))

module.exports=router

