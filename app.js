const express = require('express')
const app = express()
const tasks = require('./routes/task')

// middleware

app.use(express.json())

// app.get('/api/v1/tasks')  - get all the task
// app.post('/api/v1/tasks')   - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id')     - delete task


// routes
app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)


const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}`))



