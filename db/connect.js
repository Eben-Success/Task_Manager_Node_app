const mongoose = require('mongoose')
require('dotenv').config();
// const connectDB = async () => {
//
// }

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        {
            console.log("CONNECTED TO DB")
        }
    } catch (error){
        console.log(error)
    }
}


module.exports = connectDB

// return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// })