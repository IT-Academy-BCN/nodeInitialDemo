const {Users} = require('../models/models.js');

//retrieve users
const getUsers = async(room) => {
    
    let result;
    try {
        let users = await Users.find({'room.roomId': room.roomId});
        // console.log('getUsers', users)
        users = users.map(({ _id, userName }) => ({ userId: _id, userName }));
        result = {status: 'success', users};
    } catch (err) {
        result =  {status:'error', message: err.message};
    }
    return result;
}

const disconnectUser = async(user) => {

    let result;

    try {
        // console.log('disconnectUser', user);
        const userDisconnected = await Users.findOneAndUpdate(
            { _id: user.userId }, 
            { 'room.roomId': null, 'room.roomName': null}
            );

        if (userDisconnected) {
            result = {status: 'success', 
                      user,
                      room: userDisconnected.room}
        } else {
            result = {status: 'fail', message: 'User not found'}
        }
    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}


const joinRoom = async(user, room) => {

    let result;
    try {
        // console.log('joinRoom', room);

        // Push current user into current room
        const currentUser = await Users.findOneAndUpdate(
            { _id: user.userId }, 
            { 'room.roomId': room.roomId, 'room.roomName': room.roomName }
            );

        // console.log("currentUser", currentUser)

        if (currentUser) {
            result = {status: 'success',
                      user: { userId: currentUser._id, userName: currentUser.userName },
                      oldRoom: currentUser.room
                     };
        } else {
            result = {status: 'fail', message: 'Error joining room'}
        }
    } catch (err) {
        result =  {status:'error', message: err.message};
    }
    return result;
}

module.exports = {getUsers, disconnectUser, joinRoom}