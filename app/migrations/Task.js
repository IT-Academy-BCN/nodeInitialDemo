
//TODO especificar al README.md que s'ha d'executar aquest script abans d'arrencar la App.
const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require('../repositories/MySqlRepository'); //path de la bbdd

//Table Task model
const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
    desc: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  comments: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  createdAt: {          
    type: Sequelize.DATE,
    allowNull: false,
  },
  completedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  }
});

//Creació de les taules
Task
    .sync({force: true}) //Erase table if exist previously
    .catch(err => {
        console.log(err)
    });

module.exports = Task;