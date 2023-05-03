// Server requirements
require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to Database"))

// Model import
const Todo = require('./models/todo')
const User = require('./models/user')

// JWT tokens
const jwt = require('jsonwebtoken')
const creatToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// User routes
app.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)
        // create a token
        const token = creatToken(user._id)
        res.status(200).json({email, token})
        return
    } catch (error) {
        res.status(400).json({error: error.message})
        return
    }
})

app.post('/signup', async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)
        // create a token
        const token = creatToken(user._id)
        res.status(200).json({email, token})
        return
    } catch (error) {
        res.status(400).json({error: error.message})
        return
    }
})

// Todo routes
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

// Start the server
app.listen(PORT, () => console.log("Server running"))

////////////////////////////////////////////////
// Potts, T (2021)                            //
// mern-todo [source code]                    //
// https://github.com/TylerPottsDev/mern-todo //
////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// The Net Ninja (2022)                                       //
// MERN-auth-tutorial [source code]                           //
// https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/main //
////////////////////////////////////////////////////////////////