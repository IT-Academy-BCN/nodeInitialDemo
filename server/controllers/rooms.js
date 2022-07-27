const Rooms = require('mongoose').model("Rooms");


const addRoom = async(roomName) => {

    let result;
    console.log(roomName);

    try {
        // Check if room exists
        const roomExist = await Rooms.findOne({ roomName });

        if(roomExist) {
            result =  {status:'fail', message:'Room already exists.'};
        } else {
            const room = await Rooms.create({ roomName })
            result = {status: 'success', room: {roomId: room._id, roomName: room.roomName}}
        }
    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}

const getRooms = async() => {

    let result;

    try {
        let rooms = await Rooms.find({});
         rooms = rooms.map(({_id, roomName}) => { 
            return {roomId:_id, roomName};
          });

        result = {status: 'success', rooms};

    } catch (err) {
        
        result = {status:'error', message: err.message};
    }

    return result;
}




module.exports = {addRoom, getRooms};