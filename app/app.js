const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const sequelize = require('./database');

const playerdb = require('./models/playerdb')
const throwdb = require('./models/throwdb')

playerdb.hasOne(throwdb)
throwdb.belongsTo(playerdb)

sequelize
    .sync({alter: true})
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

/*const gamesRouter = require('./routes/games');
const playersRouter = require('./routes/players');
const rankingRouter = require('./routes/ranking');

app.use('/players', playersRouter)
app.use('/game', gamesRouter)
app.use('/ranking', rankingRouter)*/

app.listen(port, () => console.log(`Running on http://localhost:${port}`))
