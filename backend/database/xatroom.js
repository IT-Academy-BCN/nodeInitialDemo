const mysql = require("mysql2");
const Sequelize = require("sequelize");
const config_db = require("../config/config");
const connectMySQL = require("./connect");
const sequelize = new Sequelize(
  config_db.database,
  config_db.user,
  config_db.password,
  
  { dialect: config_db.dialect,
  logging: false ,
define: {
  freezeTableName: true  //el nombre de la tabla es igual al nombre del modelo
},
  },
);

sequelize.define("xatroom", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

   module.exports = {
    mysql,
    connectMySQL,
    sequelize,
    xatroom
  };
  

  