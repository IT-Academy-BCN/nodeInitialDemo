const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = Schema({
  username: String,
  message: String,
  roomname:String,
  
});

module.exports = mongoose.model('Chat', chatSchema);