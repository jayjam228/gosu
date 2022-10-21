const User = require('../core/db/models/user')
const jwt = require('jsonwebtoken')
const checkToken = require('../core/middleware/check_token_auth')
const basicAuth = require('express-basic-auth')
const { Router } = require('express')
const app = Router()
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

app.get('/token', auth, async (request, responce) => {
    let params = {...request.body}
    currentUser.password = ''
    const access_token = await jwt.sign({ user: currentUser }, process.env.SECRET, {
      expiresIn: "24h"
    });
    const refresh_token = await jwt.sign({ user: currentUser }, process.env.SECRET, {
      expiresIn: "365d"
    });
    responce.status(200).json({access_token, refresh_token})
})

app.post('/check', checkToken, async (req, res) => {
    res.status(200).json({...req.user})
})
