const express = require('express')
const path = require('path')
const app = express()

app.get('*', (request, responce) => {
    responce.send("asdadaasd")
})

app.listen(8000, () => console.log('Server has been started on port 8000...'))