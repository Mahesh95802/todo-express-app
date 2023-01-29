const taskService = require('../services/task')

const getTasks = (req, res) => {
    console.log("/tasks controller is called")
    res.send(taskService.getTasks())
}

const getTask = (req, res) => {
    console.log("/tasks/:id controller is called")
    res.send(taskService.getTask(req.params.id))
}

const postTask = (req, res) => {
    console.log("POST /tasks/ controller is called")
    res.send(taskService.postTask(req.body.name))
}

const completeTask = (req, res) => {
    console.log("PATCH /tasks/:id controller is called")
    res.send(taskService.completeTask(req.params.id))
}

const deleteTasks = (req, res) => {
    console.log("DELETE /tasks/ controller is called")
    res.send(taskService.deleteTasks(req.query.isComplete))
}

module.exports = { getTasks, getTask, postTask, completeTask, deleteTasks }