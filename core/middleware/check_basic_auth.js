const basicAuth = require('express-basic-auth')

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

module.exports = auth