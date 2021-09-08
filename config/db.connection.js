const mongoose=require('mongoose');
const dotenv=require('dotenv').config()

var DB =process.env.MONGODB_URL


mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false
}).then(() => console.log("database connected.."))
    .catch((err) => console.log(err))

