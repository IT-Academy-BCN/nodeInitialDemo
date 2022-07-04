
const mysql = require("mysql2");
const Sequelize = require("sequelize");
const config_db = require("../config/config");
const connectMySQL = require("./connect");
const sequelize = new Sequelize(
  config_db.database,
  config_db.user,
  config_db.password,
  
  { dialect: config_db.dialect,
  logging: false },
  );

const user = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
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
    mysql,
    connectMySQL,
    sequelize,
    user, 
    xatroom,
    user_xatroom
  };

  /*
  user.hasOne(xatroom);
  xatroom.belongsToMany(user);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
sequelize.define('User', {
    // ... (attributes)
  }, {
    tableName: 'Employees'
  });

*/