const mongoose = require('mongoose')

const db = 'mongodb://sa:vbnJ456@test.4dev.kz:27017/'

function connect() {
    mongoose.connect(db)
        .then((res) => console.log('Connected DB'))
        .catch((error) => console.log(error))
}

module.exports = connect