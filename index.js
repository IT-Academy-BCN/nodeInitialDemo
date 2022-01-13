const program = require('commander');
const {prompt} = require('inquirer');
const message = require('./src/bienvenida')
//const {createQ} = require('./cmds/create')
//const {remove} = require('./cmds/delete')
// const {find} = require('./cmds/find')
// const {list} = require('./cmds/listTask')
// const {update} = require('./cmds/update')

//Preguntas creación tarea

const createQ = [
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

const removeQ = [
  {
    type: 'input',
    name: 'taskName',
    message: 'Qué tarea vas a eliminar?:' //Decidir como identificar la tarea a eliminar 
  },
  {
    type: 'list',
    name: 'confirmation',
    message: 'Deseas borrar?',
    choices:['Yes','No']
    },
];

program
  .version('1.0.0')
  .description(message)

program
  .command('add')
  .alias('a')
  .description('Create a task')
  .action(() => {
    prompt(createQ).then(answers => console.info(answers))
  })

program
  .command('remove')
  .alias('r')
  .description('Remove a task')
  .action(() => {
    prompt(removeQ).then(answers => console.info(answers))
  })

// program
//   .command('update')
//   .alias('u')
//   .description('Update a task')
//   .action(() => {
//     prompt(questions).then(answers => console.info(answers))
//   })

// program
//   .command('find')
//   .alias('f')
//   .description('Find one or more task')
//   .action(() => {
//     prompt(questions).then(answers => console.info(answers))
//   })
  
// program
//   .command('list')
//   .alias('l')
//   .description('List all task')
//   .action(() => {
//     prompt(questions).then(answers => console.info(answers))
//   })

  program.parse(process.argv);