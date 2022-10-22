const { Router } = require('express')
const userService = Router()
const User = require('../core/db/models/user')


userService.get('/getCreateEmployeePage', async (req, res) => {
    
})

userService.post('/CreateUser', async (req, res) => {
    let user = new User({...req.body})
    user.save().then((result) => {
        res.status(200).json(result);
    })
})

userService.post('/getListUsers', async (req, res) => {
    const user = await User.find({}).lean()
    res.render('index',{user})
})

userService.put('/updateUser', async (req, res) => {
    const user = await User.findById(req.body._id)
    user.update({...req.body}).then((result) => {
        res.status(200).json(result);
    })
})

userService.delete('/deleteUser', async (req, res) => {
    const user = await User.findById(req.body._id)
    user.deleteOne({_id:task._id})
    res.status(200).json({ok:true})
})

userService.get('/getInviteClientPage', async (req, res) => {
    
})

userService.post('/fimdUser', async (req, res) => {
    const user = await User.findById(req.body._id)
    res.status(200).json(user)
})

module.exports = userService