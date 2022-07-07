require('dotenv').config();
const express = require('express');



const app = express();

const connectDB = require('./utils/connectDB.js')

//create server
const http = require('http').Server(app);

//create socket server
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

//require('../utils/sockets')(io);

connectDB();

app.use(express.static( '../public'));


io.on('connection', (socket => {
  
  //console.log(socket.id);
  socket.emit('welcome-message', {message: 'Welcome to the server', date: new Date()} )



}))

//invalid route handling

app.use((req, res, next)=>{
    res.status(404).send({message:"Bad request: Route Not Found"});
  });

 
  http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });
