const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.listen(4000, () => console.log("Server running on port 4000"))