const create = [
    {
      type: 'input',
      name: 'name',
      message: 'Ingresa el nombre de la tarea:'
    },
    {
      type: 'input',
      name: 'startDate',
      message: 'Fecha de Inicio:'
    },
    {
      type: 'input',
      name: 'endDate',
      message: 'Fecha de Fin:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Descripción de la tarea:'
    },
    {
      type: 'input',
      name: 'user',
      message: 'Usuario Asignado:'
    },
    {
      type: 'list',
      name: 'state',
      message: 'introduce el NUEVO estado',
      choices: ['pendiente', 'finalizada', 'en proceso'],
    }
  ];

const remove = [
  {
    type: 'input',
    name: 'taskIndex',
    message: 'Ingresa el indice de la que tarea vas a eliminar?:' //Decidir como identificar la tarea a eliminar 
  },
  {
    type: 'list',
    name: 'confirmation',
    message: 'Deseas borrar?',
    choices:['Yes','No']
  },
];

const findOne = [ // Pendiente de definir
  {
    type: 'input',
    name: 'taskIndex',
    message: 'Ingresa el indice de la tarea que quieres ver?'
  },
];

const state = [ // Revisado Pere OK.
  {
    type: 'input',
    name: 'taskIndex',
    message: 'Ingresa el indice de la tarea que quieres modificar?'
  },
  {
    type: 'list',
    name: 'state',
    message: 'introduce el NUEVO estado',
    choices: ['pendiente', 'finalizada', 'en proceso'],
  }
];

module.exports = {create, remove, findOne, state}  