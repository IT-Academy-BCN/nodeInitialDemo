const jwt = require('jsonwebtoken');

const {initHall, getRooms, createRoom} = require('../utils/rooms.js');
const {getUsers, disconnectUser, joinRoom} = require('../utils/users.js');
const {getMessages, newMessage} = require('../utils/messages.js');


module.exports = async (io) => {

    io.use(function(socket, next){
        if (socket.handshake.query && socket.handshake.query.token) {
            jwt.verify(socket.handshake.query.token, process.env.ACCESS_TOKEN_KEY, function(err, decoded) {
            if (err) return next(new Error('Authentication error'));
            socket.decoded = decoded;
            next();
        });
        }
        else {
        next(new Error('Authentication error'));
        }
    })

    io.on('connection', socket => {

        const user = {userId: socket.decoded.userId, userName: socket.decoded.userName};
        initHall();

        console.log(`user ${user.userName} connected`);
        
        //saving message to db before emitting back to front
        socket.on('new-message', async (message) => {
           
            let newMsg = await newMessage(message);
            
            if (newMsg.status === 'success') {
                socket.broadcast.to(message.room.roomId).emit('new-message', newMsg.message);
            } else {
                io.to(socket.id).emit('error', newMsg.message);
            }
        })

         //create room and inform users of creation
        socket.on('new-room', async (roomName) => {

            let createdRoom = await createRoom(roomName);
            
            if (createdRoom.status === 'success') {
                
                let currentUsers = await getUsers(createdRoom.room);
           
                io.emit('new-room', createdRoom.room, currentUsers.users);
                io.to(socket.id).emit('success', `${roomName} created`);
            } else {
                io.to(socket.id).emit('error', createdRoom.message);
            }
        })

        //retrieve all rooms
        socket.on('get-rooms', async () => {

            let currentRooms = await getRooms();
         

            if (currentRooms.status === 'success') {
                currentRooms.rooms.forEach (async (room) => {
                    let currentUsers = await getUsers(room);
                    io.to(socket.id).emit('new-room', room, currentUsers.users)
                });
            } else {
                io.to(socket.id).emit('error', currentRooms.message);
            }
        })
        
        //join room, leave old and inform about change
        socket.on('join-room', async (room) => {

            let joinedRoom = await joinRoom(user, room);
           

            if (joinedRoom.status === 'success') {

                if (joinedRoom.oldRoom.roomId) {
                   
                    //leave room (to join new)
                    socket.leave(joinedRoom.oldRoom.roomId);
                    
                    //inform room that user left
                    socket.broadcast.to(joinedRoom.oldRoom.roomId).emit('new-join-message', `${joinedRoom.user.userName} left the room`);
                    
                    // get the room's #users
                    let formerUsers = await getUsers(joinedRoom.oldRoom);
                    
                    // inform #users from former room
                    io.emit('update-room-users', joinedRoom.oldRoom, formerUsers.users);
                }

                // join new room
                socket.join(room.roomId);
                
                // inform new room of joined user
                socket.broadcast.to(room.roomId).emit('new-join-message', `${joinedRoom.user.userName} joined the room`);

                // get the current #users
                let currentUsers = await getUsers(room);

                // update current room's #users
                io.emit('update-room-users', room, currentUsers.users);

                // retrieve messages of the new room
                let currentMessages = await getMessages(room);
                // console.log('get-messages', currentMessages)
                
                //iterate through current room's messages if any
                if ((currentMessages.status === 'success') && (currentMessages.messages !== null)) {
                    currentMessages.messages.forEach (message => io.to(socket.id).emit('new-message', message))
                } else {
                    io.to(socket.id).emit('error', currentMessages.message)
                }
            } else {
                io.to(socket.id).emit('error', joinedRoom.message);
            }
        })
        
        socket.on('disconnect', async () => {
            
            let disconnectedUser = await disconnectUser(user);
           
            if (disconnectedUser.status === 'success') {
                
                // users leaves former room
                socket.leave(disconnectedUser.room.roomId);
                
                // inform that user has left the room
                socket.broadcast.to(disconnectedUser.room.roomId).emit('new-join-message', `${disconnectedUser.user.userName} left the room`);

                // get the current #users of the room
                let currentUsers = await getUsers(disconnectedUser.room);

                // update room's current #users
                io.emit('update-room-users', disconnectedUser.room, currentUsers.users);
            } else {
                io.to(socket.id).emit('error', disconnectedUser.message);
            }
        });
    })
}