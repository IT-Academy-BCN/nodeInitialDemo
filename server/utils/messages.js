
const {Rooms} = require('../models/models.js');

//retrieve messages from current room
const getMessages = async(room) => {

    let result;

    try {

        let roomInfo = '';
        let messages = '';

        if (room.roomId) {
            roomInfo = await Rooms.findOne({_id: room.roomId});
        } else if (room.roomName) {
            roomInfo = await Rooms.findOne({roomName: room.roomName});
        }else {
            throw new Error('roomId nor roomName provided');
        }

        if (roomInfo.messages !== null) {
            messages = roomInfo.messages.map(({ user, room, text}) => ({ user, room, text }));
        }

        result = {status: 'success', messages};

    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}

//push message to current room in db
const newMessage = async(message) => {

    let result;
    try {
        // push message to Rooms messages array
        result = await Rooms.updateOne(
            { _id: message.room.roomId }, 
            { $push: { messages: message }}
        );

        result = {status: 'success', message};

        return result;

    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}

module.exports = {getMessages, newMessage}