
const mongoose = require('mongoose');

const room = new mongoose.Schema({
    name: { type: String, unique: true },
    topic: String,
    messages: [message],
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', room);