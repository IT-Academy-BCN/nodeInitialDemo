require('dotenv').config();

const express = require('express');

const app = express();

//create server
const server = require('http').Server(app);


//create socket server
const io = require('socket.io')(server);

//connect to DB
require('./utils/connectDB.js')();

//require routes
const register = require('./routes/register.js');
const login = require('./routes/login.js');
const auth = require('./routes/auth.js');


//middleware
app.use(express.json());

//express static middleware serving the whole front
app.use(express.static("../public/"));

app.use(register);
app.use(login);
app.use(auth);

//invalid route handling
/*
app.use((req, res, next)=>{
    res.status(404).send({message:"Bad request: Route Not Found"});
  });
*/
//requiering and executing sockets
require('./sockets/sockets')(io);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });
