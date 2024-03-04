const {default: mongoose } = require('mongoose');

const dbConnect = () => {
    try{
        const conn= mongoose.connect("mongodb://localhost:27017//digitic");
        console.log("DataBase Connected Succesfully");
    }
    catch(error){
        console.log("DataBase error");
    }
};
module.exports = dbConnect;