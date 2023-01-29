const express = require('express')
const _ = require('lodash')

const taskRouter = require('./routers/task')


const app = express()

const PORT = 4000
global.db = []
global.id = 0

app.use(express.json())

app.use("/tasks", taskRouter)

app.listen(PORT, () => {
    console.log(`Application Started in PORT: ${PORT}`)   
})

// app.get('/tasks', (request, response) => {
//     response.send(db)
// })

// app.get('/task/:id', (request, response) => {
//     const requestTaskId = db.findIndex((task) => task.id === parseInt(request.params.id))
//     response.send(db[requestTaskId])
// })

// app.post('/task', (request, response) => {
//     task = {
//         id: id,
//         isComplete: false,
        // ..._.pick(request.body, ['name', 'age']),
//     }
//     id += 1
//     db.push(task)
//     response.send(task)
// })

// app.patch('/task/:id', (request, response) => {
//     const requestTaskId = db.findIndex((task) => task.id === parseInt(request.params.id))
//     db[requestTaskId].isComplete = true
//     response.send(db[requestTaskId])
// })

// app.delete('/tasks', (request, response) => {
//     console.log(Boolean(request.query.isComplete))
//     const deletedTasks = request.query.const deletedTasks = request.query.isComplete === "true" ? db.splice(0, db.length, ...db.filter((task) => task.isComplete !== true)) : db.splice(0, db.length)
//     response.send(deletedTasks)
// })


