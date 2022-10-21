const express = require('express')
const path = require('path')
const authService = require('./routes/Autorization')
const taksService = require('./routes/Tasks')
const app = express()
const PORT = process.env.PORT || 6000
const mongoose = require('mongoose')
const User = require('./core/db/models/user')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()
process.env.TOKEN_SECRET

app.use(cors())
app.use(express.json())
app.use(authService)
app.use(taksService)

const db = 'mongodb://sa:vbnJ456@192.168.31.135:27017/gosudesck?authSource=admin'
mongoose.connect(db)
        .then((res) => console.log('Connected DB'))
        .catch((error) => console.log(error))



app.listen(PORT, () => {
    console.log('Server has been started...')
})