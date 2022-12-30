const mongoose = require('mongoose')
require('dotenv').config();

mongoose.set('strictQuery', true);
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

// const mongoose = require('mongoose')
//
// const connectDB = (url) => {
//     return mongoose.connect(url, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//     })
// }
//
// module.exports = connectDB
