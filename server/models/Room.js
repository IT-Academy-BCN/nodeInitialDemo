const mongoose = require('mongoose');

const room = new mongoose.Schema({
    name: { type: String, unique: true },
    topic: String,
    messages: [{user:{userName: String, userId: String}, room:{roomName: String, roomId: String}, text: String }],
    created_at: {type: Date, default: Date.now },    
});

module.exports = mongoose.model('Room', room);