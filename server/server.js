require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost/todolist")

const Todo = require('./models/todo')

app.listen(process.env.PORT, () => console.log("Server running"))