const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/player');

//set up our expre app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/players');
mongoose.Promise = global.Promise;
console.log("✔️   Connect to mongoDB");

app.use(express.json());

//initialize routes
app.use('/', require('./routes/api'));

// error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({error: err.message}); 
});

//start server
app.listen(process.env.port || 4000, function() {
    console.log('✔️   Server listening...')
});



