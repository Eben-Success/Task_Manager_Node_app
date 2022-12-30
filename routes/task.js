const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask)

module.exports = router