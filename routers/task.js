const express = require("express")
const { getTasks, getTask, postTask, completeTask, deleteTasks } = require("../controllers/task")
const taskRouter = express.Router()

taskRouter.get('/', getTasks)

taskRouter.get('/:id', getTask)

taskRouter.post('/', postTask)

taskRouter.patch('/:id', completeTask)

taskRouter.delete('/', deleteTasks)

module.exports = taskRouter