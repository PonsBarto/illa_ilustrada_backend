const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotnev = require("dotenv").config();
const PORT =process.env.PORT || 4000;

dbConnect();
app.use('/', (req,res) =>{
    res.send('Hello from the server!')
})
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
