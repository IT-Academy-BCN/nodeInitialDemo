const {Rooms} = require('../models/models.js');


const addRoom = async(roomName) => {

    let result;
    //console.log(roomName);

    try {
        // Check if room exists
        const roomExist = await Rooms.findOne({roomName});

        if(roomExist) {
            result =  {status:'fail', message:'Chat room already exists.'};
        
        } else {
            const room = await Rooms.create({roomName})
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


const initHall = async() => {
    
    const roomExist = await Rooms.findOne({ roomName:'Hall' });
  if(!roomExist) {
    const room = await Rooms.create({ roomName:'Hall' })
 }
}

module.exports = {addRoom, getRooms, initHall};