require('dotenv').config();
const app = require('express')();

const connectDB = require('./utils/connectDB.js')

const http = require('http').Server(app);
const io = require('socket.io')(http);

require('./utils/sockets')(io);

const port = process.env.PORT || 3000;

connectDB();



//invalid route handling
app.use((req, res, next)=>{
    res.status(404).send({message:"Bad request: Route Not Found"});
  });


  http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });
