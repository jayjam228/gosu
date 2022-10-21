const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const mongoose = require('mongoose')
const User = require('./core/db/models/user')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require("cors")

dotenv.config();
process.env.TOKEN_SECRET;

app.use(cors())
app.use(express.json())



const db = 'mongodb://sa:vbnJ456@192.168.31.135:27017/gosudesck?authSource=admin'

mongoose.connect(db)
        .then((res) => console.log('Connected DB'))
        .catch((error) => console.log(error))

    
        const auth = basicAuth({
            authorizer: async (username, password, cb) => {
              let currentUser = await User.findOne({login: username }).exec()
              const userMatches = basicAuth.safeCompare(username, currentUser.login)
              const passwordMatches = basicAuth.safeCompare(password, currentUser.password)
              if (userMatches & passwordMatches)
                return cb(null, true)
              else
                return cb(null, false)
            },
            authorizeAsync: true,
          })

app.get('/api/token', auth, async (request, responce) => {
    let params = {...request.body}
    
    //const token = generateAccessToken({ username: params.login });
    responce.status(200).json(params)
})

app.get('*', (request, responce) => {
    responce.send("asdadaasd")
})

app.listen(8000, () => console.log('Server has been started on port 8000...'))