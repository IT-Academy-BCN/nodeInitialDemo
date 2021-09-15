const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const routes = require('./routes/routes');
const db = require('./config/dbconnection');

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  }
});

require('./utils/sockets')(io);

app.use(cors());

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

server.listen(app.get('port'), () => {
  console.log('Server listening in port :', app.get('port'));
});
