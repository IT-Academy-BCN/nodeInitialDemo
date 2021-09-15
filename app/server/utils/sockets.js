const user = require('../controllers/userController');
const messages = require('../controllers/messageController');

module.exports = (io) => {
  io.on('connection', async (socket) => {
    console.log('User connected!');

    socket.on('adduser', async (data) => {
      socket.room = data.roomname;
      socket.username = data.username;

      let id = socket.id;
      await user.addSocket(id);

      socket.join(data.roomname);

      socket.emit(
        'adduser',
        `${data.username} you have connected to ${socket.room} room`
      );

      socket.broadcast
      .to(socket.room)
      .emit('adduser', `${data.username} has connected to this room`);

      let msg = await messages.readMessages(data.roomname);
      socket.emit('messages', msg);
    });
    
    socket.on('sendxat', (data) => {
      messages.addMessage(data);

      io.sockets
      .in(data.roomname)
      .emit('updatexat', data.username, data.message);
    });

    socket.on('switchRoom', async (data) => {
      socket.leave(socket.room);
      socket.join(data.roomname);

      await user.changeRoom(socket.id, data.roomname);

      socket.emit('adduser', `you have connected to ${data.roomname}`);

      let m = await messages.readMessages(data.roomname);
      socket.emit('messages', m);

      socket.broadcast
      .to(socket.room)
      .emit('adduser', `${data.username} has left this room`);

      socket.broadcast
      .to(data.roomname)
      .emit('adduser', `${data.username} has connected to this room`);
    });

    socket.on('disconnect', async () => {
      await user.disconnect(socket);
      
      socket.broadcast.emit('adduser', `${socket.username} disconnected`);

      socket.leave(socket.room);
    });
  });
};
