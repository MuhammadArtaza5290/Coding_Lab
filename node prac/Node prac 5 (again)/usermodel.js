const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/myMongodb`)

const schema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number
})

module.exports = mongoose.model('employee', schema)