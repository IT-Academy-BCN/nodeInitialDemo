const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./routes/routes');

app.set('port', process.env.PORT ||8080);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () => {
  console.log('Server listening in port:', app.get('port'));
});
