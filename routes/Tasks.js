const { Router } = require('express')
const taksService = Router()

const Task = require('../core/db/models/task')

taksService.get('/getTaskPage', async (req, res) => {
    
})

taksService.get('/getCompany', async (req, res) => {
    
})

taksService.post('/createTask', async (req, res) => {
    let task = new Task({...req.body})
    task.save().then((result) => {
        res.status(200).json(result);
    })
})

taksService.get('/addFile', async (req, res) => {
    
})

taksService.get('/getListPage', async (req, res) => {
    
})

taksService.post('/getList', async (req, res) => {
    let params = {...req.body}
    let count = await Task.find().count()
    let list = await Task.find({})
    .skip(params.current_page * params.page_size)
    .limit(params.limit)
    .exec()
    
    res.status(200).json({data:list, 
        current_page:params.current_page,
        page_size:params.page_size,
        page_count: count > 0 ? count/params.page_size : 0,
        total_count : count
    })
})


taksService.post('/FindTask', async (req, res) => {
    const task = await Task.findById(req.body._id)
    res.status(200).json(task)
})

taksService.delete('/deleteTask', async (req, res) => {
    const task = await Task.findById(req.body._id)
    task.deleteOne({_id:task._id})
    res.status(200).json({ok:true})
})

taksService.put('/updateTask', async (req, res) => {
    const task = await Task.findById(req.body._id)
    task.update({...req.body}).then((result) => {
        res.status(200).json(result);
    })
})

module.exports = taksService