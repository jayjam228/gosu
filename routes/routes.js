const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
    res.send('get page')
})

router.post('/autorization', async (req, res) => {
    res.send('autorization')
})

router.get('/getForgotPasswordPage', async (req, res) => {
    
})

router.put('/updatePassword', async (req, res) => {
    
})

router.get('/getHomePage', async (req, res) => {
    
})

router.get('/getTask1Page', async (req, res) => {
    
})

router.get('/getCompany', async (req, res) => {
    
})

router.post('/createTask1', async (req, res) => {
    
})

router.get('/addFile', async (req, res) => {
    
})

router.get('/getTask2Page', async (req, res) => {
    
})

router.get('/selectTittle', async (req, res) => {
    
})

router.get('/selectPriority', async (req, res) => {
    
})

router.post('/createTask2', async (req, res) => {
    
})

router.get('/getTask3Page', async (req, res) => {
    
})

router.post('/createTask3', async (req, res) => {
    
})

router.get('/getListPage', async (req, res) => {
    
})

router.post('/getList', async (req, res) => {
    
})

router.post('/FindTask', async (req, res) => {
    
})

router.delete('/deleteTask', async (req, res) => {
    
})

router.put('/updateList', async (req, res) => {
    
})

router.get('/getTasksPage', async (req, res) => {
    
})

router.get('/getProfilePage', async (req, res) => {
    
})

router.get('/getProfile', async (req, res) => {
    
})

router.put('/updateProfile', async (req, res) => {
    
})

router.get('/getMyTasks', async (req, res) => {
    
})

router.get('/getCreateEmployeePage', async (req, res) => {
    
})

router.post('/CreateEmployee', async (req, res) => {
    
})

router.get('/getInviteClientPage', async (req, res) => {
    
})

router.post('/InviteClient', async (req, res) => {
    
})

router.get('/getListEmployee', async (req, res) => {
    
})

router.get('/getListClients', async (req, res) => {
    
})

router.get('/getTicket', async (req, res) => {
    
})

module.exports = router