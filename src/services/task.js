const { Task } = require('../models')
const { findIndexById } = require('../utils/arrayUtils')

const getTasks = async () => {
    console.log("GET /tasks service is called")
    const tasks = await Task.findAll();
    // console.log(tasks.every(task => task instanceof Task))
    return tasks
}

const getTask = async (id) => {
    console.log("GET /tasks/:id service is called")
    return await Task.findOne({ where: { id: id } })
}

const postTask = async (name) => {
    console.log("POST /tasks/ service is called")
    const task = {
        name,
        isComplete: false,
    }
    return await Task.create(task)
}

const completeTask = async (id) => {
    console.log("PATCH /tasks/:id service is called")
    const [updatedField, updateObjects] = await Task.update({ isComplete: true }, { where: { id: id }, returning: true })
    return updateObjects
}

const deleteTasks = async (isComplete) => {
    console.log("DELETE /tasks/ service is called")
    // const initialLength = db.length
    // isComplete === "true" ? global.db.splice(0, global.db.length, ...global.db.filter((task) => task.isComplete !== true)) : global.db.splice(0, global.db.length)
    // return `Deleted ${initialLength - global.db.length} element(s)`
    const deleted = isComplete === 'true' ? await Task.destroy({ where: { isComplete: true } }) : await Task.destroy({ where: {} })
    return deleted
}

module.exports = { getTasks, getTask, postTask, completeTask, deleteTasks }

