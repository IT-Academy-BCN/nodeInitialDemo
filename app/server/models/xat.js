const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xatSchema = Schema({
  username: String,
  message: String,
  roomname:String,
});

module.exports = mongoose.model('Xat', xatSchema);
