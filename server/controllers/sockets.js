const Room = require('./models/Room');
const Message = require('./models/Message');
const User = require('./models/User');


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

    //join room
      socket.on('join-room', (user, room) => {
        const {error, currentUser} = new User(user);

        socket.emit('joined-user', message);
        
    }

    //join room
    socket.on('join-room', ({ name, room }, callback) => {
 
        const { error, currentUser } = addUser(
            { id: socket.id, name, room });
 
        if (error) return callback(error);



    socket.on('join', ({ name, room_id, user_id }) => {
        const { error, user } = addUser(socket.id, name, user_id, room_id);
  
        socket.join(room_id);
        if (error) {
          console.log('join error', error);
        } else {
          console.log('joined user: ', user);
        }
      });
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