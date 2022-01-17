const create = [
    {
      type: 'input',
      name: 'nameTask',
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
    }
  ];

const remove = [
    {
      type: 'input',
      name: 'name',
      message: 'Qué tarea vas a eliminar?:' //Decidir como identificar la tarea a eliminar 
    },
    {
      type: 'list',
      name: 'confirmation',
      message: 'Deseas borrar?',
      choices:['Yes','No']
      },
];

const find = [
   {
      type: 'input',
      name: 'taskName',
      message: 'Donde quieres buscar?:'
    },
    {
      type: 'input',
      name: 'taskStartDate',
      message: 'Fecha de Inicio:'
    },
    {
      type: 'input',
      name: 'taskEndDate',
      message: 'Fecha de Fin:'
    },
    {
      type: 'input',
      name: 'taskDescription',
      message: 'Descripción de la tarea:'
    },
    {
      type: 'input',
      name: 'taskUser',
      message: 'Usuario Asignado:'
    }
];

const update = [
    {
        type: 'input',
        name: 'taskName',
        message: 'Qué tarea quieres modificar?'
    },
    {
        type: 'input',
        name: 'taskStartDate',
        message: 'Fecha de Inicio:'
    },
    {
        type: 'input',
        name: 'taskEndDate',
        message: 'Fecha de Fin:'
    },
    {
        type: 'input',
        name: 'taskDescription',
        message: 'Descripción de la tarea:'
    },
    {
        type: 'input',
        name: 'taskUser',
        message: 'Usuario Asignado:'
    }
];

module.exports = {create, remove, find, update}  