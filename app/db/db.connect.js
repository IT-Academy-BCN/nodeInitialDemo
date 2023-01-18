const Sequelize = require('sequelize');

const userModel = require('../models/Users.model');
const gameModel = require('../models/Game.model');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  }
);

const User = userModel(sequelize, Sequelize);
const Game = gameModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log('tables sync');
});

module.exports = { User, Game };
