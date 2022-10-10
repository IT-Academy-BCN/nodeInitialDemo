require('dotenv').config();

//preparing server and socket server
const express = require('express')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);

// Connect to database
require('./utils/connectDB')();

// Middlewares
app.use(express.json());

//express static middleware serving the front end
//if run on separate ports, cors is required
app.use(express.static("../public/"));

// Routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/auth', require('./routes/auth'));

//handling error route
app.use((req, res) => res.status(404).send({ status: "fail", message: "PAGE NOT FOUND"}));

// Sockets
require('./sockets/sockets')(io);

PORT = process.env.API_PORT || 3000
server.listen(PORT, console.log(`Server listening on ${PORT}`));