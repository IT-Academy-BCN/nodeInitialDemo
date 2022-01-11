
const express = require('express'); 
const app = express();
const http = require('http').Server(app);  
const routes = require('./routes/route')
const io = require('socket.io')(http, {cors: {origin: "*"} });
const mongoose = require('mongoose');

const cors = require('cors');

const { PORT, DB, } = require('./config');


require('./sockets')(io);

app.options('*', cors());
app.use( cors() );

app.use('/', routes)

// database connection
mongoose.connect(DB)
    .then(db => console.log('✔️  database ready!'))
    .catch(err => console.log(`❌ database NOT ready`))


// starting server
http.listen(PORT, () => {
    console.log(`✔️  Server ready on port: ${PORT}`);
});
