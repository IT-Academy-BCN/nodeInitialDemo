const controller = require('../controllers/controllerUser');
const messages = require('../controllers/controllerMessages');
const Chat = require('../models/chat');
const User = require('../models/user');
const { Socket } = require('socket.io');

module.exports = (io) => {
  io.on('connection', async (socket) => {
    let user = await controller.checkuser();
    socket.username = user;
    console.log('Usuario conectado');
    socket.on('adduser', async (data) => {
      //Storing users connected in a rooms in db

      socket.room = data.roomname;

      //Joining the Socket Room
      socket.join(data.roomname);

      // echo to client they've connected
      socket.emit('adduser', {
        username: socket.username,
        roomname: `you have connected to ${socket.room}`,
      });
      //Emitting New Username to Clients

      socket.broadcast.to('Chat').emit('adduser', {
        username: socket.username,
        roomname: 'has connected to this room',
      });

      let m = await messages.readMessages(data.roomname);
      socket.emit('messages', m);
    });
    // when the client emits 'sendchat', this listens and executes
    socket.on('sendchat', (data) => {
      let message = {
        roomname: socket.room,
        username: socket.username,
        message: data,
      };
      messages.addMessage(message);
      io.sockets.in(socket.room).emit('updatechat', socket.username, data);
    });

    socket.on('switchRoom', async (data) => {
      socket.leave(socket.room);
      socket.join(data.roomname);
      await controller.changeRoom(socket.username, data.roomname);
      socket.emit('adduser', {
        username: socket.username,
        roomname: `you have connected to ${data.roomname}`,
      });
      let m = await messages.readMessages(data.roomname);
      socket.emit('messages', m);
      socket.broadcast.to(socket.room).emit('adduser', {
        username: socket.username,
        roomname: 'has left this room',
      });
      socket.room = data.roomname;
      socket.broadcast.to(data.roomname).emit('adduser', {
        username: socket.username,
        roomname: 'has connected to this room',
      });
    });

    socket.on('disconnect', async () => {
      await controller.disconnect(socket);
      socket.broadcast.emit('adduser', socket.username + ' has disconnected');
      socket.leave(socket.room);
    });
  });
};
