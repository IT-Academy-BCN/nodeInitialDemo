const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const apiRouter = require('./routes/api')

require('./database/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

app.use('/api', apiRouter);

const server = app.listen(PORT, () => {
    console.log(`✔️  Server ready! & listening on port:${PORT}`)
});

const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', () => {
    console.log('new connection');
});


