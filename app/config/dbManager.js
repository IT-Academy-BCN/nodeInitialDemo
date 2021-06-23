import Sequelize from 'sequelize';
import playerModel from '../models/players.js';
import gameModel from '../models/games.js';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mariadb'
});

try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos correcta.');
} catch (error) {
    console.error('No se ha podido conectar con la base de datos:', error);
}

const Player = playerModel(sequelize, Sequelize);

try {
    await Player.sync({ force: false });
} catch (error){
    console.error('No se ha podido crear la tabla Players');
}

const Game = gameModel(sequelize, Sequelize);

try {
    Player.hasMany(Game);
    Game.belongsTo(Player);
    await Game.sync({ force: false });
} catch (error){
    console.error('No se ha podido crear la tabla Games');
}

export { 
    Player,
    Game,
    sequelize
}

