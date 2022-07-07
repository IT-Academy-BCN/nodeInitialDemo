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
    socket.on('join-room', ({ name, room }, callback) => {
 
        const { error, currentUser } = addUser(
            { id: socket.id, name, room });
 
        if (error) return callback(error);


    //TODO
    //send messages
    

    socket.on('send-message', (message, room_id, clearSpaceCb) => {
        const user = getUser(socket.id);
  
        const newMessage = {
          name: user.name,
          user_id: user.user_id,
          room_id,
          text: message,
        };
  
        console.log(newMessage);
  
        newMessage = new Message(newMessage);
  
        newMessage.save();
  
        io.to(room_id).emit('new-message', newMessage);
       
        clearSpaceCb();
      });

   
     socket.on('get-messages', () => {
         const messages = Message.findAll({})


     })

     //TODO
     socket.on('disconnect-user', (user) => {
         removeUser
     })



};