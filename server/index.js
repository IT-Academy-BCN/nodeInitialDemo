require('dotenv').config();

const express = require('express');

//const cors = require('cors');

const app = express();
//create server
const server = require('http').Server(app);
const port = process.env.PORT || 3000;
//create socket server
const io = require('socket.io')(server);

//connect to DB
require('./utils/connectDB.js')();



app.use(express.static( './public'));
//app.use(cors);

//require routes
const signupRoute = ('./routes/signup.js');
//const authRoutes = require('./routes/auth.js')
app.use(signupRoute);

//invalid route handling
app.use((req, res, next)=>{
    res.status(404).send({message:"Bad request: Route Not Found"});
  });

//requiering and executing sockets
//require('./utils/sockets')(io);

server.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });
