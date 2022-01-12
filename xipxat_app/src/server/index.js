
const express = require('express'); 
const app = express();
const http = require('http').Server(app);  
const routes = require('./routes/route')
const io = require('socket.io')(http, {cors: {origin: "*"} });
const cors = require('cors');
const { PORT } = require('./config');

require('./database');
require('./sockets')(io);

app.options('*', cors());
app.use( cors() );
app.use('/', routes)


// starting server
http.listen(PORT, () => {
    console.log(`✔️  Server ready on port: ${PORT}`);
});
