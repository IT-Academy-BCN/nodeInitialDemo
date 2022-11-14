const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const sequelize = require('./database');

/*const playerInfo = require('./models/playerInfo')
const gameInfo = require('./models/gameInfo')
const throws = require('./models/throws')

playerInfo.hasMany(gameInfo, {foreignKey: 'winner'})
gameInfo.belongsTo(playerInfo)
sequelize.sync({alter: true}).catch((err) => {console.log(err)})*/

sequelize
    .sync()
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

/*const gamesRouter = require('./routes/games');
const playersRouter = require('./routes/players');
const rankingRouter = require('./routes/ranking');

app.use('/players', playersRouter)
app.use('/game', gamesRouter)
app.use('/ranking', rankingRouter)*/

app.listen(port, () => console.log(`Running on http://localhost:${port}`))
