const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('../utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('../utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const db = require('../db');
const Message = require('../models/Message');
const Room = require('../models/Room');

// usando el html del front
app.use(express.static(path.join(__dirname, '../public')));

//run when client connects
io.on('connection', async (socket) => {
    console.log('New WS connection...');

    // // Load rooms
    // let rooms = await Room.find({});
    // console.log(rooms);
    // socket.emit('load rooms', rooms);

    socket.on('joinRoom', async ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);
        // welcome current user
        socket.emit('message', formatMessage('Chat bot', 'Bienvenido al chat'));

        // broadcast when an user connects
        socket.broadcast.to(user.room).emit('message', formatMessage('Chat bot', `${user.username} se ha unido al chat`));

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });

        // Load old messages
        let oldMessages = await Message.find({});
        socket.emit('load old messages', oldMessages);

  });

      // Load rooms
    let rooms = await Room.find({});
    socket.emit('load rooms', rooms);

  // listen for chatMessage
  socket.on('chatMessage', async (msg) => {
    const user = getCurrentUser(socket.id);
    console.log(user);
    await new Message({
        user: user.username,
        msg: msg,
        room: user.room
    }).save();
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  // listen for created room
  socket.on('chatRoom', async (room) => {
    await new Room({
        name: room,
    }).save();
    io.emit('room', 'new room created');
  });
    
  // runs when clients disconnects
  socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('message', formatMessage('Chat bot', `${user.username} has left the chat`));

            // send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
})

const PORT = 3000;

server.listen(PORT, () => console.log(`App running in port ${PORT}`));