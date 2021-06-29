const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const userSchema = Schema({
  username: String,
  email: String,
  roomname: String,
});

module.exports = mongoose.model('User', userSchema);
