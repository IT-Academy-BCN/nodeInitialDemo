const mongoose = require('mongoose')
// const { mongo } = require('../../config/config')

const userSchema = mongoose.Schema({
    name: String,
})

const User = mongoose.model('User', userSchema)

module.exports = User