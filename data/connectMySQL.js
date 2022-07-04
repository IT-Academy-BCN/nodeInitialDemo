const mysql = require("mysql2");
const Sequelize = require("sequelize");
const config_db = require("../config/config");
const sequelize = new Sequelize(
  config_db.database,
  config_db.user,
  config_db.password,
  { dialect: "mysql" ,
  logging: false },
);

async function connectMySQL() {
  const connection = mysql.createConnection({
    host: config_db.host,
    user: config_db.user,
    password: config_db.password,
  });
  connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${config_db.database}\`;`,
    (err, result) => {
      if (err) throw err;
      sequelize
        .sync()
        .then(() => console.log("Synchronized tables"))
        .catch((error) => console.log("Has occurred an error", error));
    }
  );
  connection.end();
}


    const Player = sequelize.define("Player", {
      idPlayer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      register_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      totalGames: {  
  
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
  
      },
      totalWins: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
  
      },
      
    winRatio: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    }

     
      });
  
  const Games = sequelize.define('Games', {
        idGames: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dice1: {
            type: Sequelize.INTEGER,
        allowNull: false
        },
        dice2: {
            type: Sequelize.INTEGER,
            allowNull: false},
        
       score: {
        type: Sequelize.BOOLEAN,
        allowNull: false},

       

       })

       Player.hasMany(Games,{onDelete:'cascade'}) 
       Games.belongsTo(Player)




module.exports = {
   Player, Games, sequelize,
  connectMySQL,
};
