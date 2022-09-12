'use strict';

// Importar dotenv
require('dotenv').config();

// Importar llibreria Express
const express = require('express');

// Instanciar servidor Express
const app = express();

// Configurar entorn
//const PORT = process.env.PORT; --> No funciona amb aquest
const PORT = 3000;

// Importar rutes del Controller
//const user_routes = require('../controller/user.js');
app.use(express.json());

//NIVELL 1
app.use('/api', user_routes);


//test
/*app.get('/', function (req, res) {
    res.send('Hola Leyva! Hola Samsa! Hola Cris!');
});*/

// Iniciar servidor--> ¡¡¡SEMPRE AL FINAL!!!
app.listen(PORT, () => {
    console.log(`El servidor funciona en el port ${PORT}`);
});

