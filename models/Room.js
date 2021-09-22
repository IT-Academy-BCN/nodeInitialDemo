const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
  name: String
});
mongoose.model('Room', RoomSchema);
module.exports = mongoose.model('Room');