const Sequelize = require('sequelize');

const userModel = require('../models/User.model');
const gameModel = require('../models/Game.model');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

const User = userModel(sequelize, Sequelize);
const Game = gameModel(sequelize, Sequelize);

sequelize.sync({ force: false });
console.log('tables updated');

module.exports = { User, Game };
