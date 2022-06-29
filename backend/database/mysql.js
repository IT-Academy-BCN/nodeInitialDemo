const mysql = require("mysql2");
const Sequelize = require("sequelize");
const config_db = require("../config/config");
const sequelize = new Sequelize(
  config_db.database,
  config_db.user,
  config_db.password,
  
  { dialect: config_db.dialect,
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


    const xatroom = sequelize.define("xatroom", {
      xatroom_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      xatroom_name: {
        type: Sequelize.STRING,
        allowNull: false,
      }
     
      });

      const users = sequelize.define("users", {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING,
          allowNull: false,
        }
       
      });

        const xatroom_users = sequelize.define("xatroom_users", {
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          xatroom_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },

         
   

        });



module.exports = {
    xatroom, users, xatroom_users, sequelize,
  connectMySQL,
};