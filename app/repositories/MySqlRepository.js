const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

const { Task } = require('../models/TaskModel');



let Model;
initialize()
  .then(model => Model = model)
  .catch(err => console.log(err));

const taskModel = {
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
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  completedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
  }
};


async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({
      host: 'localhost', 
      port: 3306, 
      user: process.env.MYSQL_USER, 
      password: process.env.MYSQL_PASSWORD });
    await connection.query(`CREATE DATABASE IF NOT EXISTS tasks`);

    // connect to db
    const sequelize = new Sequelize('tasks', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, 
    { 
      dialect: 'mysql', 
      logging: false 
    });

    // Initialize models
    const Model = sequelize.define("Task", taskModel);

    // sync all models with database
    await sequelize.sync();



    return Model;
}



const getElementById = async (id) => {
  const element = await Model.findByPk(id);

  return new Task(element.dataValues);
}

const getElements = async () => {
  const rawElements = await Model.findAll({});
  return rawElements.map(rawElement => new Task(rawElement.dataValues));
}

const createElement = async (data) => {
  await Model.sync();
  const newTask = await Model.create(data);
  return new Task(newTask.dataValues);
}

const deleteElementById = async (id) => {
  await Model.destroy({ where: { id: id } });
}

const updateElementById = async (id, data) => {
  await Model.update(data, { where: { id: id } });

  return getElementById(id);
}


module.exports = {
  getElementById,
  getElements,
  createElement,
  deleteElementById,
  updateElementById,
};
