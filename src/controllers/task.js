const taskService = require('../services/task')

const getTasks = async (req, res) => {
    console.log("/tasks controller is called")
    res.send(await taskService.getTasks())
}

const getTask = async (req, res) => {
    console.log("/tasks/:id controller is called")
    res.send(await taskService.getTask(req.params.id))
}

const postTask = async (req, res) => {
    console.log("POST /tasks/ controller is called")
    res.send(await taskService.postTask(req.body.name))
}

const completeTask = async (req, res) => {
    console.log("PATCH /tasks/:id controller is called")
    res.send(await taskService.completeTask(req.params.id))
}

const deleteTasks = async (req, res) => {
    console.log("DELETE /tasks/ controller is called")
    res.send(await taskService.deleteTasks(req.query.isComplete))
}

module.exports = { getTasks, getTask, postTask, completeTask, deleteTasks }