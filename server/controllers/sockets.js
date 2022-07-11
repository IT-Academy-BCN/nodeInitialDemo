const jwt = require('jsonwebtoken');

const Room = require('./models/Room');
const Message = require('./models/Message');
const User = require('./models/User');
const {checkRoom} = ('./controllers/rooms.js')


module.exports = async(io) => {

    io.use((socket, next) => {
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


    io.on('connection', (socket) => {
       

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
    socket.on('join-room', ({name, room }, callback) => {
 
        const { error, currentUser } = addUser(
            { id: socket.id, name, room });
 
        if (error) return callback(error);

    });
   
    //send messages
    socket.on('send-message', (message, room_id, clearSpaceCb) => {
        const user = getUser(socket.id);
  
        const newMessage = {
          name: user.name,
          user_id: user.user_id,
          room_id,
          text: message,
        };
        //debug
        console.log(newMessage);
  
        newMessage = new Message(newMessage);
  
        newMessage.save();
  
        io.to(room_id).emit('new-message', newMessage);
       
        clearSpaceCb();
      });

     
      //get message history
     socket.on('get-messages', (room_id) => {
             Message.find({room_id}).then((messages) => {
             socket.emit('get-messages', result)
         })
     })

     
     socket.on('disconnect-user', (user) => {
         removeUser
     })

    }

}