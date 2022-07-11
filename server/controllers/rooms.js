const Room = require('../models/channel');
const User = require('../models/user');

module.exports = (name) => {
        
     const roomExists = await Room.findOne({name});
     if(roomExists) {
         console.log('This room already exists.')
     }

}


