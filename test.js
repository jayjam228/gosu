const express = require('express')
const app = express()
const {connect} = require('./core/db/connection')
app.use(express.json())

connect()

app.get('/api/token', (request, responce) => {
    let params = {...request.body}
    responce.status(200).json(params)
})

app.get('*', (request, responce) => {
    responce.send("asdadaasd")
})

app.listen(8000, () => console.log('Server has been started on port 8000...'))