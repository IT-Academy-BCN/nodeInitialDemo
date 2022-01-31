const { Sequelize } = require('sequelize');

//Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',  //Lloc on està allotjada la DDBB
  dialect: 'mysql'
});

module.exports = sequelize; 