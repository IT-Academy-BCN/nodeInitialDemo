const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ai = require('mongoose-auto-increment');

const userSchema = Schema({
  username: String,
  socket: String,
  roomname: String,
},);

ai.initialize(mongoose.connection);
userSchema.plugin(ai.plugin, 'User');
module.exports = mongoose.model('User', userSchema);
