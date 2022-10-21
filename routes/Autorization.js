const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
    res.send('get page')
})

router.post('/autorization', async (req, res) => {
    res.send('autorization')
})

module.exports = router