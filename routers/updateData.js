const express=require('express')
const router=express.Router()

const updateUserDetials=require('../controller/updateData.js')

router.put('/',updateUserDetials)

module.exports=router
