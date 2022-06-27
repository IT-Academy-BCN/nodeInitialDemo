const express = require("express");
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const corsOptions = {
  origin: 'http://localhost:5001',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
const server = require("http").createServer(app);


const { connectMySQL, xatroom } = require("../database/mysql");
connectMySQL();


// Socket-io
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5001',
  },
});
require('socket.io')(io);

//const io = require("socket.io")(server);

//para decir que se ha conectado un usuario, cuando aprietas el boton de 'accedir'
//el cliente real se conecta con el servidor
io.on("connection", function (socket) {
  socket.chatroom = "general";
  socket.join(socket.chatroom);
  socket.on("newuser", function (username) {
    socket.broadcast
      .to(socket.chatroom)
      .emit("update", username + "  s'ha afegit a la conversa");
  });

  socket.on("exituser", function (username) {
    socket.broadcast
      .to(socket.chatroom)
      .emit("update", username + " ha sortit de la conversa");
  });

  socket.on('chat', function(message) {
    socket.broadcast.to(message.chatroom).emit("chat", message);
});

  socket.on("switchchatroom", function (newchatroom) {
    socket.leave(socket.chatroom);
    socket.join(newchatroom);
    socket.chatroom = newchatroom;
    socket.broadcast
      .to(socket.chatroom)
      .emit("switchchatroom", "S'ha canviat un usuari al canal " + newchatroom);
  });

  socket.on("newchatroom", async function (chatroom) {
    if (chatroom.length > 0) {
      socket.broadcast
        .to(socket.chatroom)
        .emit("update", "S'ha creat la sala " + chatroom);
      await xatroom.create({ xatroom_name: chatroom });
    }
    let salas = await xatroom.findAll();
    socket.emit("nuevasala", salas);
    socket.broadcast.emit("nuevasala", salas);
  });
// todos emiten en el primer elemento de la select

  socket.on("initxat", async function () {
    let salas = await xatroom.findAll();
    socket.emit("nuevasala", salas);
    socket.broadcast.emit("nuevasala", salas);
    if (salas.length > 0){
      socket.join(salas[0].xatroom_name);
      socket.chatroom = salas[0].xatroom_name;
    }
  });

});

server.listen(5000);