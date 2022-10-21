const express = require('express')
const path = require('path')
const routes = require('./routes/routes')
const app = express()
const PORT = process.env.PORT || 6000

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(routes)
mongoose.connect = require('./core/db/connection')

app.listen(PORT, () => {
    console.log('Server has been started...')
})