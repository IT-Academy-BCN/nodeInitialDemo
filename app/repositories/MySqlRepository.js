require('dotenv').config();
const { Sequelize } = require('sequelize');
const { createElement } = require('./JSONRepository');
//const sequelize = require("localhost"); //path de la bbdd


//Passing parameters separately (other dialects)
const sequelize = new Sequelize('Task provider', 'ITAcademy', '01234', {
  host: 'localhost',  //Lloc on està allotjada la DDBB
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


const Task = sequelize.define("Task", {
  id_task: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  task_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  creation_date: {
    type: Sequelize.DATE,
    allowNull: true,   //CANVIAR
  },
  completion_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comments: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

const getElementById = async (id) => {
  Task.findAll({
    where: {
      id_task: id
    }
  });
}

const getElements = async () => {
  Task.findAll({
    attributes: ['task_name', 'description']
  });
}

const createElement = async (data) => {
  Task.sync().then(function () {
    return Task.create({
      task_name: data.task_name,
      description: data.description,
      creation_date: data.creation_date,
      completion_date: data.completion_date,
      status: data.status,
      comments: data.comments
    })
  })
}

const deleteElementById = async (id) => {
  Task.destroy({
    where: {
      id_task: id
    }
  });
}

const updateElementById = async (id, data) => {
  Task.update(
    {
      task_name: data.task_name,
      description: data.description,
      creation_date: data.creation_date,
      completion_date: data.completion_date,
      status: data.status,
      comments: data.comments
    },
    { where: { id_task: id } }
  )
    .success(result =>
      handleResult(result)
    )
    .error(err =>
      handleError(err)
    )
}


// Task.sync({force: true}).then(function () {
//   // Table created
//   return Task.bulkCreate([{
//     task_name: 'Rentar',
//     description: 'Rentar plats',
//     creation_date: '2022-01-01',
//     completion_date: '2021-01-01',
//     status: 'to do',
//     comments: 'jksdfg'
//   },{
//     task_name: 'Planxar',
//     description: 'Planxar els pantalons del porc del meu marit',
//     creation_date: '2022-01-01',
//     completion_date: '2021-01-01',
//     status: 'to do',
//     comments: 'jksdfgfg'
//   },{
//     task_name: 'Passar vaieta pel retret-te',
//     description: 'Rentar la tassa',
//     creation_date: '2022-01-01',
//     completion_date: '2021-01-01',
//     status: 'to do',
//     comments: 'jksdfg'
//   }]);
// });

module.exports = {
  Task, sequelize, 
  getElementById,
  getElements,
  createElement,
  deleteElementById,
  updateElementById,
};
