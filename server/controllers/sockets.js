const Room = require('./models/Room');
const Message = require('./models/Message');
const User = require('./models/User');
const Room = require('./models/Room');

module.exports = (io) => {

    io.on('connection', (socket => {
        console.log('User connected to socket')
    }))

    //find current available rooms
    socket.on('find-rooms', () => {
        Room.find({}).then((currentRooms) => {  
        socket.emit('list-rooms', currentRooms);
    })
     
    //create room
    socket.on('create-room', (name) => {
        const room = new Room({name});
        room.save().then((newRoom) => {io.emit('created-room', newRoom)}
        )
    });


    //https://socket.io/docs/v3/rooms/
    //https://www.geeksforgeeks.org/how-to-manage-users-in-socket-io-in-node-js/
    //join room
      socket.on('join-room', ({user}, room) => {
        const joinedUser = new User({user});

        socket.emit('joined-user', message);
        
    }
    //TODO
    //send messages
    socket.on('send-message', (user) => {
        const currentUser = User.findOne({user});

    })

    //TODO
     socket.on('get-messages', () => {
         const messages = Message.findAll({})


     })

     //TODO
     socket.on('disconnect-user', (user) => {
         removeUser
     })



};