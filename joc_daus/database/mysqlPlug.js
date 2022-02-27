const configSQL= require('../config');
const { Sequelize} = require('sequelize');
const sequelize = new Sequelize(configSQL.database, configSQL.user, configSQL.password, { dialect: 'mysql' });
const mysql2 = require('mysql2');

function mysqlConnect() {
   try {
      const connection = mysql2.createConnection({ host:configSQL.host, user:configSQL.user, password:configSQL.password });
      connection.query(`CREATE DATABASE IF NOT EXISTS \`${configSQL.database}\`;`);
      sequelize.sync()
      console.log("✔️  Connect to MySQL")
   } catch (err) {
      console.log(`❌ NOT connected to MySQL ${err.message}`)
   }
};

module.exports = { "mysqlConnect": mysqlConnect }