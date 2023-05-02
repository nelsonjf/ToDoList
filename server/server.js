require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to Database"))

const Todo = require('./models/todo')

app.get('/todo', async (req, res) => {
    const todo = await Todo.find()
    res.json(todo)
})

app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        todo: req.body.todo
    })
    todo.save()
    res.json(todo)
})

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

app.get('/todo/done/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.done = !todo.done
    todo.save()
    res.json(todo)
})

app.listen(process.env.PORT, () => console.log("Server running"))

module.exports = app;

////////////////////////////////////////////////
// Potts, T (2021)                            //
// mern-todo [source code]                    //
// https://github.com/TylerPottsDev/mern-todo //
////////////////////////////////////////////////