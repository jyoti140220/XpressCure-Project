const mongoose=require('mongoose');
var DB =process.env.MONGODB_URL


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("database connected.."))
    .catch((err) => console.log(err))

