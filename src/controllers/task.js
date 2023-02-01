const Joi = require('joi')
const taskService = require('../services/task')
const HTTPError = require('../utils/errors/httpError')

const getTasks = async (req, res) => {
    console.log("GET /tasks controller is called")
    const response = await taskService.getTasks()
    res.send(response)
}

const getTask = async (req, res) => {
    console.log("GET /tasks/:id controller is called")
    res.send(await taskService.getTask(req.params.id))
}

const postTask = async (req, res) => {
    console.log("POST /tasks/ controller is called")
    try{
        console.log(req.body)
        const postTaskSchema = Joi.object({
            name: Joi.string().required()
        })
        const { error, value } = postTaskSchema.validate(req.body)
        console.log(error, value)
        if(error) throw new HTTPError(400, error.message)
        res.send(await taskService.postTask(req.body.name))
    } catch(err) {
        if(err instanceof HTTPError) {
            return res.status(err.code).send({ message: err.message })
        }
        res.status(500).send(err.message)
    }
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