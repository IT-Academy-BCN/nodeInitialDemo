'use strict';

// Importar dotenv
require('dotenv').config();

// Importar llibreries 
const express = require('express');
const path = require('path');

// Instanciar servidor Express
const app = express();

// Configurar entorn
//const PORT = process.env.PORT; --> No funciona amb aquest
const PORT = 3000;

//Carregar rutes
const user_routes = require('./src/routes/user.js');
const upload_routes = require('./src/routes/upload.js');
const time_routes = require('./src/routes/time.js');

//Middlewares
app.use(express.static(path.join(__dirname, './uploads')));
app.use(express.json());

//NIVELL 1
app.use('/', user_routes);
app.use('/', upload_routes);

//NIVELL 2
app.use('/', time_routes);


//test
/*app.get('/', function (req, res) {
    res.send('Hola Leyva! Hola Samsa!');
});*/

// Iniciar servidor--> ¡¡¡SEMPRE AL FINAL!!!
app.listen(PORT, () => {
    console.log(`El servidor funciona en el puerto ${PORT}.`); 
});
