const { findIndexById } = require('../utils/arrayUtils')

const getTasks = () => {
    console.log("GET /tasks/ service is called")
    return global.db
}

const getTask = (id) => {
    console.log("GET /tasks/:id service is called")
    const requestTaskId = findIndexById(id)
    return global.db[requestTaskId]
}

const postTask = (name) => {
    console.log("POST /tasks/ service is called")
    task = {
        id: global.id,
        isComplete: false,
        name,
    }
    global.id += 1
    global.db.push(task)
    return task
}

const completeTask = (id) => {
    console.log("PATCH /tasks/:id service is called")
    const requestTaskId = findIndexById(id)
    global.db[requestTaskId].isComplete = true
    return global.db[requestTaskId]
}

const deleteTasks = (isComplete) => {
    console.log("DELETE /tasks/ service is called")
    const initialLength = db.length
    isComplete === "true" ? global.db.splice(0, global.db.length, ...global.db.filter((task) => task.isComplete !== true)) : global.db.splice(0, global.db.length)
    return `Deleted ${initialLength - global.db.length} element(s)`
}

module.exports = { getTasks, getTask, postTask, completeTask, deleteTasks }

