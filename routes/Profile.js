const { Router } = require('express')
const ProfileService = Router()

const User = require('../core/db/models/user')
const Task = require('../core/db/models/task')

ProfileService.get('/getProfilePage', async (req, res) => {
    
})

ProfileService.get('/getProfile', async (req, res) => {
    
})

ProfileService.put('/updateProfile', async (req, res) => {
    const user = await User.findById(req.body._id)
    user.update({...req.body}).then((result) => {
        res.status(200).json(result);
    })
})

ProfileService.get('/getMyTasks', async (req, res) => {
    const tasks = await Task.find({}).lean()
    res.render('index',{tasks})
})

module.exports = ProfileService