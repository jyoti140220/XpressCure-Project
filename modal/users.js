const mongoose=require('mongoose')


const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
})



const userschema = new mongoose.model('userDetials', user)

module.exports=userschema

