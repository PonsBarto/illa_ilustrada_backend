const {default: mongoose } = require('mongoose');

const dbConnect = () => {
    try{
        const conn= mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected Successfully");
    }
    catch(error){
        console.log("DataBase error");
    }
};
module.exports = dbConnect;