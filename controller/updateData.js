const db=require('../modal/users.js')


const updateUserDetials=async(req,res)=>{
    try{
        const result=await db.updateOne({email:req.body.email},{$set:req.body});
        return res.status(200).json({
            message:"You Have Update Data Successfully!!",
            status:200
        })
    }catch(err){
        return res.status(400).send(err)  
    }
}

module.exports=updateUserDetials