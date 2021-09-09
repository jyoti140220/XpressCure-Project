const db = require('../modal/users.js')
const bcrypt = require('bcrypt')
const {createToken}=require('../middleware/jwt.js')


const login = async (req, res) => {
    try{
        const data1=await db.findOne({ email: req.body.email }, { "_id": 0, "__v": 0 })
        if (data1){
            const comaparePassword = await bcrypt.compare(req.body.password, data1.password)
            if (comaparePassword) {
                const token= createToken({email:req.body.email},process.env.SECRET_KEY,{expiresIn: '24h' })
                res.cookie('token', token)
                return res.status(200).json({ userDetials: data1, message: "You Have Logged Successfully!!!", status: 200 })
            }else{
                return res.status(404).json({ message: "Invalid Password", status: 404 })
            }
        }else{
            return res.status(404).json({ message: "Invalid Email-Id", status: 404 })}

    }catch (err) {
        return res.status(400).send(err)  
    }

}

module.exports = login