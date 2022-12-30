const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/task')
require('dotenv').config();
const notFound = require('./middleware/not-found')



// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks);

app.use(notFound)

// app.get('/api/v1/tasks')  - get all the task
// app.post('/api/v1/tasks')   - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id')     - delete task


// routes
app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})

connectDB();

app.listen(3000, ()=>{
    console.log("Sever is listening on port 3000")
})