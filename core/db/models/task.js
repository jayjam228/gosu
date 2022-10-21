const { default: strictTransportSecurity } = require('helmet/dist/types/middlewares/strict-transport-security')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task