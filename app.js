require('dotenv').config(); // Para requerir archivo .env

const express = require('express');
const app = express();

const {connectSequelize} = require('./src/bbdd/bd_mysql.js');

connectSequelize();

//Importar rutas
const players_routes = require('./src/routes/players.js');
const games_routes = require('./src/routes/games.js');
const ranking_routes = require('./src/routes/ranking.js');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Testeo
/*app.get('/', (req, res) => {
    res.send('HOOOOOOLAAAAAAAAAA :)');
});*/

app.use('/', players_routes); 
app.use('/', games_routes); 
app.use('/', ranking_routes); 

//Arrancar servidor
app.listen(process.env.API_PORT, () => {
    console.log("El servidor está funcionando en el puerto " + process.env.API_PORT);
});