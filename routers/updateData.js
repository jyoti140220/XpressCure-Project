const express=require('express')
const router=express.Router()
const {varifyToken}=require('../middleware/jwt.js')
const updateUserDetials=require('../controller/updateData.js')

router.put('/',varifyToken,updateUserDetials)

module.exports=router
