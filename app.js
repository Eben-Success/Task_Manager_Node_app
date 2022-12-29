const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/task')
require('dotenv').config();



// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')  - get all the task
// app.post('/api/v1/tasks')   - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id')     - delete task


// routes
app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})






// const start = async (port, callback) =>{
//     try{
//         await connectDB(process.env.MONGO_URI)
//         app.listen(3000, ()=>{
//             console.log(`Servers is listening on port 3000`)})
//     } catch (error){
//         console.log(error)
//     }
// }
//
// start()

// call my database
connectDB();
