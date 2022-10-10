require('dotenv').config();

const express = require('express');

const app = express();

//create server
const server = require('http').Server(app);

//create socket server
const io = require('socket.io')(server);

//connect to DB
require('./utils/connectDB.js')();

//middleware
app.use(express.json());
//express static middleware serving the front
//if run on separate ports cors must be required
app.use(express.static("../public/"));


// Routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/auth', require('./routes/auth'));

//invalid route handling
app.use((req, res) => res.status(404).send({ status: "fail", message: "PAGE NOT FOUND"}));

//requiering and executing sockets
require('./sockets/sockets')(io);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Socket.IO server running at ${port}`);
  });
