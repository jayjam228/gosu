const router = require('router')
const User = require('../core/db/models/user')


router.get('/getCreateEmployeePage', async (req, res) => {
    
})

router.post('/CreateUser', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        login: req.body.login,
        password: req.body.password,
        role: req.body.role,
        email: req.body.email,
        telegram_chat_id: req.body.telegram_chat_id
    })
    user.save().then((result) => {
        res.status(200).json(result);
    })
})

router.get('/getListUsers', async (req, res) => {
    
})

router.put('/updateUser', async (req, res) => {
    
})

router.delete('/deleteUser', async (req, res) => {
    
})

router.get('/getInviteClientPage', async (req, res) => {
    
})