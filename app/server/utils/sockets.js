const controller = require('../controllers/controllerUser');
const messages = require('../controllers/controllerMessages');

const Chat = require('../models/chat');
const User = require('../models/user');
const { Socket } = require('socket.io');

module.exports = (io) => {
  io.on('connection', async (socket) => {
    console.log('Usuario conectado');

    socket.on('adduser', async (data) => {
      //Storing users connected in a rooms in db
      socket.room = data.roomname;
      socket.username = data.username;

      let id = socket.id;
      await controller.addSocket(id);

      //Joining the Socket Room
      socket.join(data.roomname);

      // echo to client they've connected
      socket.emit(
        'adduser',
        `${data.username} you have connected to ${socket.room}`
      );
      //Emitting New Username to Clients

      socket.broadcast
        .to(socket.room)
        .emit('adduser', `${data.username} has connected to this room`);

      let m = await messages.readMessages(data.roomname);
      socket.emit('messages', m);
    });
    // when the client emits 'sendchat', this listens and executes
    socket.on('sendchat', (data) => {
      messages.addMessage(data);
      io.sockets
        .in(data.roomname)
        .emit('updatechat', data.username, data.message);
    });

    socket.on('switchRoom', async (data) => {
      socket.leave(socket.room);
      socket.join(data.roomname);

      await controller.changeRoom(socket.id, data.roomname);
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
      await controller.disconnect(socket);
      socket.broadcast.emit('adduser', `${socket.username} has disconnected`);

      socket.leave(socket.room);
    });
  });
};
