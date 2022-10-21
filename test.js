const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const mongoose = require('mongoose')
const User = require('./core/db/models/user')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cors = require("cors")
const isLoggedIn = require('./core/middleware/check_auth')

dotenv.config()

app.use(cors())
app.use(express.json())

mongoose.connect = require('./core/db/connection')

let currentUser = undefined

const auth = basicAuth({
  authorizer: async (username, password, cb) => {
   currentUser = await User.findOne({login: username }).exec()
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
    currentUser.password = ''
    const token = await jwt.sign({ user: currentUser }, process.env.SECRET, {
      expiresIn: "24h"
    });
    responce.status(200).json({token})
})

app.post('/api/check', isLoggedIn, async (req, res) => {
    res.status(200).json({...req.user})
})

app.get('*', (request, responce) => {
    responce.send("asdadaasd")
})

app.listen(8000, () => console.log('Server has been started on port 8000...'))