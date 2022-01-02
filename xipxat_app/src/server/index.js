
const express = require('express'); 
const app = require('express')();
const http = require('http').Server(app);   
const io = require('socket.io')(http, {cors: {origin: "*"} });
const mongoose = require('mongoose');


require('./sockets')(io);

// database connection
mongoose.connect('mongodb://localhost/xipxat')
    .then(db => console.log('✔️  database ready!'))
    .catch(err => console.log(`❌ database NOT ready`))

// settings
const PORT = process.env.PORT || 3000;

// starting server
http.listen(PORT, () => {
    console.log(`✔️  Server ready on port: ${PORT}`);
});
