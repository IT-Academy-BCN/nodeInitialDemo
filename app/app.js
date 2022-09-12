'use strict';

// Per importar dotenv
require('dotenv').config();

// Per importar llibreria Express
const express = require('express');

// Instanciar servidor Express
const app = express();

// Configurar entorn
const PORT = process.env.PORT;

// Iniciar servidor--> ¡¡¡SIEMPRE AL FINAL!!!
app.listen(PORT, () => {
    console.log(`El servidor funciona en el port ${PORT}`);
});

