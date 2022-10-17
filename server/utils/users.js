const {Users} = require('../models/models.js');

async function getUsers(room) {
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

async function disconnectUser (user) {

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
            result = {status: 'fail', message: 'socketid for user disconnect not found'}
        }
    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}


async function joinRoom (user, room) {

    let result;
    try {
        // console.log('joinRoom', room);

        // Push this user into the current room
        const oldUser = await Users.findOneAndUpdate(
            { _id: user.userId }, 
            { 'room.roomId': room.roomId, 'room.roomName': room.roomName }
            );

        // console.log("oldUser", oldUser)

        if (oldUser) {
            result = {status: 'success',
                      user: { userId: oldUser._id, userName: oldUser.userName },
                      oldRoom: oldUser.room
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