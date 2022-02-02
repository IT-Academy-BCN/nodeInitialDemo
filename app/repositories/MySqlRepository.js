require('dotenv').config();
const { Sequelize } = require('sequelize');
const task = require('../migrations/Task');
const { getTask } = require('../services/TaskService');
const { getElementById } = require('./JSONRepository');

//Passing parameters separately (other dialects)
const sequelize = new Sequelize('Task provider', USERNAME, PASSWORD, {
  host: 'localhost',  //Lloc on està allotjada la DDBB
  dialect: 'mysql'
});


//Crear getTask(taskId), getTasks(), createTask(task), updateTask(task)
  //deleteTask(taskId)

const getElementById = (id) =>{
  
}

module.exports = sequelize; 