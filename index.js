const express = require('express')
const path = require('path')
const authService = require('./routes/Autorization')
const taksService = require('./routes/Tasks')
const app = express()
const PORT = process.env.PORT || 8890
const mongoose = require('mongoose')
const User = require('./core/db/models/user')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'routes')))
mongoose.connect = require('./core/db/connection')

app.listen(PORT, () => {
    console.log('Server has been started...')
})