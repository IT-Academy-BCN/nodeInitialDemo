const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('./utils/sockets')(io)
const routes = require('./routes/routes');
const db = require('./config/dbconexion');
const cookieParser = require('cookie-parser');

//Goggle auth



//Settings
app.set('port', process.env.PORT || 8080);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use(routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//starting Server
server.listen(app.get('port'), () => {
  console.log('Servidor escuchando en el puerto :', app.get('port'));
});
