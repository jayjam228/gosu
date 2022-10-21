const router = require('router')
const Task = require('../core/db/models/task')

router.get('/getTaskPage', async (req, res) => {
    
})

router.get('/getCompany', async (req, res) => {
    
})

router.post('/createTask', async (req, res) => {
    let task = new Task({
        title:req.body.title,
        theme: req.body.theme,
        contactNumber: req.body.contactNumber,
        priority: req.body.priority,
        question: req.body.question,
        description: req.body.description
    })
    task.save().then((result) => {
        res.status(200).json(result);
    })
})

router.get('/addFile', async (req, res) => {
    
})

router.get('/selectTittle', async (req, res) => {
    
})

router.get('/selectPriority', async (req, res) => {
    
})

router.get('/getListPage', async (req, res) => {
    
})

router.post('/getList', async (req, res) => {
    const tasks = await Todo.find({}).lean()
    res.render('index', {
        tasks
    })
})


router.post('/FindTask', async (req, res) => {
    
})

router.delete('/deleteTask', async (req, res) => {
    
})

router.put('/updateTask', async (req, res) => {
    const task = await Task.findById(req.body.tittle)
    task.update()
    task.save().then((result) => {
        res.status(200).json(result);
    })
})