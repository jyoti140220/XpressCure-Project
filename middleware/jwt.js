const jwt=require('jsonwebtoken')
const createError=require('http-errors')

const createToken = (data,secret_key) => {
    return jwt.sign(data, secret_key)
}

const varifyToken=(req,res,next)=>{
    if(!req.headers.cookie) return next(createError.Unauthorized())
    const authHeader=req.headers.cookie.split('=')
    const token=authHeader[1]
    jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
        if (err){
            return next(createError.Unauthorized())
        }
        else if(payload.email==req.body.email){
            console.log("Token Verify.........")
            next()
        }else{
            res.status(404).json({message:"This User Is Not Login",status:404})
        }})
}

module.exports={createToken,varifyToken}
