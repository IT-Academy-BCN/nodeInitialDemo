const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

//Conectamos con la base de datos
mongoose.connect('mongodb://localhost:27017/dicegame', {useNewUrlParser: true, useUnifiedTopology: true});

//Middlewares
app.use(express.json()); //content-type

//Routes
const playerRoutes = require('./src/routes'); //importing routes
app.use('/', playerRoutes);

//Starting the server, listen for requests
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

