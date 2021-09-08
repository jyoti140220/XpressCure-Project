const db = require('../modal/users.js')
const joi=require('@hapi/joi')
const bcrypt=require('bcrypt')

const signup = async (req, res) => {
    const authschema=joi.object({
        firstName:joi.string().min(3).max(10).required(),
        lastName:joi.string().min(3).max(10).required(),
        email:joi.string().email().lowercase().required(),
        password:joi.string().required(),
        phoneNumber:joi.number().integer().min(10**9).max(10**10 - 1)
    })
    const result=authschema.validate(req.body)
    if(result.error){
        return res.status(400).send(result.error.details[0].message)
    }else{
        console.log("data validate")
    }
    
    try {  
        const userExits=await db.findOne({email:req.body.email})
        if (userExits){
            return res.status(208).json({
                message:"Email Is Already Exists",
                status:208
            })
        }else{
            const document = new db({firstName: req.body.firstName,lastName:req.body.lastName,email: req.body.email,password: req.body.password,phoneNumber:req.body.phoneNumber})
            const salt = await bcrypt.genSalt(10);
            document.password = await bcrypt.hash(document.password, salt);
            const result = await document.save()
            return res.status(200).json({
                message:"You Have Signup Succesfully!!",
                status:200
            })
        }
    } catch (err) {
        return res.status(400).send(err)  
    }
}
module.exports=signup