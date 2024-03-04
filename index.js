const express = require("express");
const app = express();
const dotnev = require("dotenv").config();
const PORT =process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
