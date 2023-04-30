const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost/todolist")

const Todo = require('./models/todo')

app.get('/todo', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})

app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        task: req.body.text
    })
    todo.save()
    res.json(todo)
})

app.delete('/todo/delete/:id', async(req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.done = !todo.done
    todo.save()
    res.json(todo)
})

app.listen(4000, () => console.log("Server running on port 4000"))