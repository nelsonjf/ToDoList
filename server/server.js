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

app.listen(process.env.PORT, () => console.log("Server running"))