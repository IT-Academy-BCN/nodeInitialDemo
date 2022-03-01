const configSQL= require('./configSQL');
const Sequelize = require('sequelize');
const ThrowsModel = require('../models/throwsSQL')
const PlayerModel = require('../models/playerSQL')
const UserModel = require('../models/usersSQL');
const sequelize = new Sequelize(configSQL.database, configSQL.user, configSQL.password, { dialect: 'mysql' });
const mysql2 = require('mysql2');

const Throws = ThrowsModel(sequelize, Sequelize);
const Player = PlayerModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

Player.hasMany(Throws, {foreignKey: 'playerId', sourceKey: 'id'}, {onDelete: "cascade"})
Throws.belongsTo(Player, {foreignKey: 'playerId', targetKey: 'id'});


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
                   "Throws": Throws,
                   "Player": Player,
                   "User": User }