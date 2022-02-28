const configSQL= require('../config');
const Sequelize = require('sequelize');
const ThrowModel = require('../models/throwSQL.js')
const sequelize = new Sequelize(configSQL.database, configSQL.user, configSQL.password, { dialect: 'mysql' });
const Throw = ThrowModel(sequelize, Sequelize);
const mysql2 = require('mysql2');




async function mysqlConnect() {
   try {  
      const connection = mysql2.createConnection({ host:configSQL.host, user:configSQL.user, password:configSQL.password });
      connection.query(`CREATE DATABASE IF NOT EXISTS \`${configSQL.database}\`;`);
      await sequelize.sync({ force: false })
      console.log("✔️  Connect to MySQL")
      console.log("✔️  Tables sincronized")
   } catch (err) {
      console.log(`❌ NOT connected to MySQL ${err.message}`)
   }
};

module.exports = { "mysqlConnect": mysqlConnect,
                   "Throw": Throw }