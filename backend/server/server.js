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

const { connectMySQL } = require("../database/connect");

connectMySQL();

const { user, xatroom, user_xatroom } = require("../database/mysql");

/* const { user } = require("../database/user");
const { xatroom } = require("../database/xatroom");
const { user_xatroom } = require("../database/user_xatroom"); */



// Socket-io
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5001',
  },
});
require('socket.io')(io);

//para decir que se ha conectado un usuario, cuando aprietas el boton de 'accedir'
//el cliente real se conecta con el servidor

io.on("connection", function (socket) {
  socket.chatroom = "general";
  socket.join(socket.chatroom);

  socket.on("newuser", async function (username) {
    //TODO: Añadir usuario a la base de datos
    let new_user = await user.findOrCreate({
      where: { name: username },
      defaults: { name: username },
    });
    socket.broadcast
      .emit("update", new_user.name + " ha entrat al xat");
  });
  

  socket.on("exituser", async function (username, chatroom) {
    //TODO: Eliminar user_xatroom de la base de datos
    let user_model = await user.findOne({ where: { name: username } });
    let xatroom_model = await xatroom.findOne({ where: { name: chatroom } });
    await user_xatroom.destroy({
      where: {
        user_id: user_model.id,
        xatroom_id: xatroom_model.id,
      },
    });
    let user_in_channel = await user_xatroom.findAll({ where: { xatroom_id: xatroom_model.id } });
    let user_in_channel_names = await user.findAll({ where: { id: user_in_channel.map(user => user.user_id) } });
    socket.broadcast.to(chatroom).emit("updateuserschannel", user_in_channel_names);
    socket.broadcast
      .to(chatroom)
      .emit("update", username + " ha sortit de la conversa");
  });

  socket.on('chat', function(message) {
    socket.broadcast.to(message.chatroom).emit("chat", message);
});

  socket.on("switchchatroom", async function (newchatroom, username) {
    //TODO: Cambiar user_xatroom de la base de datos
    let user_model = await user.findOne({ where: { name: username } });
    let xatroom_model_add = await xatroom.findOne({ where: { name: newchatroom } });
    let xatroom_model_remove = await xatroom.findOne({ where: { name: socket.chatroom } });
    if (xatroom_model_remove){
      await user_xatroom.destroy({ where: { user_id: user_model.id, xatroom_id: xatroom_model_remove.id } });
      let user_in_channel = await user_xatroom.findAll({ where: { xatroom_id: xatroom_model_remove.id } });
      let user_in_channel_names = await user.findAll({ where: { id: user_in_channel.map(user => user.user_id) } });
      socket.emit("updateuserschannel", user_in_channel_names);
      socket.broadcast.to(socket.chatroom).emit("updateuserschannel", user_in_channel_names);  
    }
    await user_xatroom.create({ user_id: user_model.id, xatroom_id: xatroom_model_add.id });
    let user_in_channel = await user_xatroom.findAll({ where: { xatroom_id: xatroom_model_add.id } });
    let user_in_channel_names = await user.findAll({ where: { id: user_in_channel.map(user => user.user_id) } });
    socket.leave(socket.chatroom);
    socket.join(newchatroom);
    socket.chatroom = newchatroom;
    socket.emit("updateuserschannel", user_in_channel_names);
    socket.broadcast.to(socket.chatroom).emit("updateuserschannel", user_in_channel_names);
    socket.emit("switchchatroom", username + " ha entrat a la sala " + newchatroom);
    socket.broadcast
      .to(socket.chatroom)
      .emit("switchchatroom", username + " ha entrat a la sala " + newchatroom);
  });

  socket.on("newchatroom", async function (chatroom) {
    if (chatroom.length > 0) {
      socket.broadcast
        .to(socket.chatroom)
        .emit("update", "S'ha creat la sala " + chatroom);
      try {
        await xatroom.findOrCreate({
          where: { name: chatroom },
          defaults: { name: chatroom },
        });
      } catch (error) {
        console.log("error");
      }
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
  });

});

server.listen(5000);