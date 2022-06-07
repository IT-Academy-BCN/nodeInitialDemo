'use strict'

const express = require("express");
const bodyParser = require("body-parser");
require('./data/connectDB');

const app = express()
const api = require('./routes/player');

const configDB = require('./config/config')

//Middlewares o tasques que s'han de realitzar abans de rebre la petició
app.use(bodyParser.urlencoded({extended:false})); //Configurar  bodyparser
app.use(bodyParser.json()); //Rebem el cos de la petició i el transformem en un json

app.use(api)


app.listen(configDB.port, () => {
  console.log(`API REST en http://localhost:${configDB.port}/`);
});


