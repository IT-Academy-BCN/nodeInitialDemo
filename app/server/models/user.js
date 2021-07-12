const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const userSchema = Schema(
  {
    username: String,
    socket: String,
    roomname: String,
  },
  
);

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', userSchema);
