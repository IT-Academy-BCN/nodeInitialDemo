const Sequelize = require('sequelize');

const userModel = require('../models/Users.model');
const gameModel = require('../models/Game.model');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, //REPLACE THIS WITH YOUR DATABASE NAME: 'diceGame',
  process.env.DATABASE_USER, //REPLACE THIS WITH YOUR DATABASE USER: 'root'
  process.env.DATABASE_PASSWORD, //REPLACE THIS WITH YOUR DATABASE PASSWORD: 'toor'
  {
    host: process.env.DATABASE_HOST, //REPLACE THIS WITH YOUR SERVER IP
    dialect: 'mysql',
    logging: false,
  }
);

const User = userModel(sequelize, Sequelize);
const Game = gameModel(sequelize, Sequelize);

sequelize.sync({ force: false });
console.log('tables in sync');

module.exports = { User, Game };
