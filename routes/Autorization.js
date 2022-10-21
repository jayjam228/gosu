const { Router } = require('express')
const authService = Router()

authService.get('/', async (req, res) => {
    res.send('get page')
})

authService.post('/autorization', async (req, res) => {
    res.send('autorization')
})

module.exports = authService