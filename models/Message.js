const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  user: String,
  msg: String,
  date: { 
        type: Date, 
        default: Date.now 
    },
  room: String
});
mongoose.model('Message', MessageSchema);
module.exports = mongoose.model('Message');