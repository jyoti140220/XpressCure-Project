const express=require('express')
const app=express()
app.use(express.json())
const db=require('./config/db.connection.js')
const port=process.env.PORT

app.use('/',require('./routers/index.js'))

app.listen(port,()=>{
    console.log(`server is running on port  ${port}....`);
});
