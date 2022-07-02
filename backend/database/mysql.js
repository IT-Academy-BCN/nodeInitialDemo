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

const user = sequelize.define("user", {
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

const xatroom = sequelize.define("xatroom", {
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

const user_xatroom = sequelize.define("user_xatroom", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  xatroom_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = {
  user, 
  user_xatroom,
  xatroom,
  sequelize,
  connectMySQL,
};


