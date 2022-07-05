
const mongoose = require('mongoose');

const room = new mongoose.Schema({
    name: { type: String, lowercase: true, unique: true },
    topic: String,
    users: [user],
    messages: [message],
    created_at: Date,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', room);