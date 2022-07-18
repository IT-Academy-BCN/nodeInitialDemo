const Rooms = require('mongoose').model("Rooms");

// retrieve messages from Room
const getMessages = async(room) => {

let result;

    try {
        let roomData = '';
        let messages = '';

        if (room.roomId) {
            roomData = await Rooms.findOne({_id: room.roomId});
        } else if (room.roomName) {
            roomData = await Rooms.findOne({roomName: room.roomName});
        } else {
            throw new Error('roomId and roomName missing');
        }
        
        //iterate through messages if any
        if (roomData.messages !== null) {
            messages = roomInfo.messages.map(({ user, room, text}) => ({ user, room, text }));
        }

        result = {status: 'success', messages};

    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}


//add new message
const addMessage = (message) => {

    let result;

    try {
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

module.exports = {getMessages, addMessage}








    

