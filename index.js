const express = require('express')
const path = require('path')
const routes = require('./routes/routes')
const app = express()
const PORT = process.env.PORT || 6000

app.use(routes)


app.listen(PORT, () => {
    console.log('Server has been started...')
})