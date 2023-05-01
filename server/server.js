/////////////////////////////////////////////////////////////
// Large parts of this code are inspired by or copied from //
// Tyler Potts' fullstack tutorial on Youtube. //////////////
// https://youtu.be/R81g-2r6ynM /////////////////////////////
/////////////////////////////////////////////////////////////

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Todo = require('./models/todo')
const todo = require('./models/todo')

app.get('/', async (req, res) => {
    const todo = await Todo.find()
    res.json(todo)
})

app.post('/new', (req, res) => {
    const todo = new Todo({
        todo: req.body.todo
    })
    todo.save()
    res.json(todo)
})

app.delete('/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

app.put('/done/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.done = !todo.done
    todo.save()
    res.json(todo)
})

app.listen(process.env.PORT, () => console.log("Server running"))