const jwt = require('jsonwebtoken');

const {getMessages, addMessage} = require('../controllers/messages.js');
const {getUsers, joinRoom, disconnectUser} = require('../controllers/users.js');
const {addRoom, getRooms} = require('../controllers/rooms.js');

module.exports = async (io) => {
  
    io.use(function(socket, next){
        if (socket.handshake.query && socket.handshake.query.token) {
            jwt.verify(socket.handshake.query.token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
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
        
            console.log('a user connected');
         

        const user = {userId: socket.decoded.userId, userName: socket.decoded.userName};
        
        //add new message to room
        socket.on('new-message', async (message) => {
            console.log("new-message")
            let newMessage = await addMessage(message);
            // console.log('new-message', newMessageRes);
            if (newMessage.status === 'success') {
                socket.broadcast.to(message.room.roomId).emit('new-message', newMessage.message);
            } else {
                io.to(socket.id).emit('error', newMessage.message);
            }
        })

        //create new room
        socket.on('new-room', async(roomName) => {
            
            let newRoom = await addRoom(roomName);
            
            if (newRoom.status === 'success') {

                //inform about the new room
                let currentUsers = await getUsers(newRoom.room);
                
                io.emit('add-room', newRoom.room, currentUsers.users);
                io.to(socket.id).emit('success', `${roomName} created`);
            } else {
                io.to(socket.id).emit('error', newRoom.message);
            }
        })


        socket.on('get-rooms', async () => {

            let currentRooms = await getRooms();
            // console.log(`get-rooms`, currentRooms)

            if (currentRooms.status === 'success') {
                currentRooms.rooms.forEach ( async(room) => {
                    let currentUsers = await getUsers(room);
                    io.to(socket.id).emit('new-room', room, currentUsers.users)
                });
            } else {
                io.to(socket.id).emit('error', currentRooms.message);
            }
        })

       //join room
        socket.on('join-room', async (room) => {

            let currentRoom = await joinRoom(user, room);
            // console.log('join-room', currentRoom);

            if (currentRoom.status === 'success') {

                if (currentRoom.oldRoom.roomId) {

                    // leave the old room
                    socket.leave(currentRoom.oldRoom.roomId);
                    // console.log(`user ${user.userName} left room ${currentRoom.oldRoom.roomName}`);

                    // inform old room we left
                    socket.broadcast.to(currentRoom.oldRoom.roomId).emit('new-join-message', `${currentRoom.user.userName} left the room`);

                    // get the old room #users
                    letcurrentUsers = await getUsers(currentRoom.oldRoom);

                    // inform everyone about the old room #users
                    io.emit('update-room-users', currentRoom.oldRoom,currentUsers.users);
                }

                // join the new room
                socket.join(room.roomId);
                // console.log(`user ${user.userName} joined room ${room.roomName}`);

                // inform new room we came
                socket.broadcast.to(room.roomId).emit('new-join-message', `${currentRoom.user.userName} joined the room`);

                // get the new room #users
                let currentUsers = await getUsers(room);

                // inform everyone about the new room #users
                io.emit('update-room-users', room,currentUsers.users);

                // Get the messages of the new room
                let currentMessages = await getMessages(room);
                // console.log('get-messages', currentMessages)

                if ((currentMessages.status === 'success') && (currentMessages.messages !== null)) {
                    currentMessages.messages.forEach (message => io.to(socket.id).emit('new-message', message))
                } else {
                    io.to(socket.id).emit('error', currentMessages.message)
                }
            } else {
                io.to(socket.id).emit('error', currentRoom.message);
            }
        })

        socket.on('disconnect', async () => {
            // console.log(`user ${user.userName} disconnected`);

            let userDisconnected = await disconnectUser(user);
            // console.log('userDisconnected', userDisconnected)

            if (userDisconnected.status === 'success') {
                
                // leave the old room
                socket.leave(userDisconnected.room.roomId);
                // console.log(`user ${userDisconnected.user.userName} left room ${userDisconnected.room.roomName}`);

                // inform old room we left
                socket.broadcast.to(userDisconnected.room.roomId).emit('joined-message', `${userDisconnected.user.userName} left the room`);

                // get the new room #users
                let currentUsers = await getUsers(userDisconnected.room);

                // inform everyone about the new room #users
                io.emit('users-update', userDisconnected.room, currentUsers.users);
            } else {
                io.to(socket.id).emit('error', userDisconnected.message);
            }
        })

    })
    */
} 




    
    
    

