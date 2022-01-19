#!/usr/bin/env node
const program = require('commander');
//const {prompt} = require('inquirer');
const message = require('../src/bienvenida')

program
  .description(message)
  .version('1.0.0','-v, --version','Para consultar la versión del programa')
  //.option('-a, --add', 'Crear una tarea')
  // .option('-r, --remove', 'Eliminar una tarea')
  // .option('-f, --find','Buscar una tarea')
  // .option('-u, --update', 'Modificar una tarea');
  .command('add','Crear una nueva tarea')
  .command('remove','Eliminar una tarea')
  .command('update','Modificar una tarea')
  .command('find','Buscar una tarea')

// const add = program.command('add').alias('a').description('Añadir una nueva tarea')

//   add
//     .command('json')
//     .alias('j')
//     .description('Almacenar en Json')
//     //.action(console.log('Almacenando en Json'))
//   add
//     .command('sql')
//     .alias('s')
//     .description('Almacenar en SQL')
//     //.action(console.log('Almacenando en SQL'))
//   add
//     .command('mongo')
//     .alias('m')
//     .description('Almacenar en Mongo')
//     //.action(console.log('Almacenando en MONGO'))

// const remove = program.command('remove').alias('r').description('Eliminar una nueva tarea')
  
//   remove
//     .command('json')
//     .alias('j')
//     .description('Eliminar en Json')
//     //.action(console.log('Almacenando en Json'))
//   remove
//     .command('sql')
//     .alias('s')
//     .description('Eliminar en SQL')
//     //.action(console.log('Almacenando en SQL'))
//   remove
//     .command('mongo')
//     .alias('m')
//     .description('Eliminar en Mongo')
//     //.action(console.log('Almacenando en MONGO'))

// const find = program.command('find').alias('f').description('Buscar una tarea')

//   find
//     .command('json')
//     .alias('j')
//     .description('Buscar en Json')
//     //.action(console.log('Almacenando en Json'))
//   find
//     .command('sql')
//     .alias('s')
//     .description('Buscar en SQL')
//     //.action(console.log('Almacenando en SQL'))
//   find
//     .command('mongo')
//     .alias('m')
//     .description('Buscar en Mongo')
//     //.action(console.log('Almacenando en MONGO'))

// const update = 
// program.command('update').alias('u').description('Modificar una nueva tarea')
//   update
//     .command('json')
//     .alias('j')
//     .description('Modificar en Json')
//     //.action(console.log('Almacenando en Json'))
//   update
//     .command('sql')
//     .alias('s')
//     .description('Modificar en SQL')
//     //.action(console.log('Almacenando en SQL'))
//   update
//     .command('mongo')
//     .alias('m')
//     .description('Modificar en Mongo')
//     //.action(console.log('Almacenando en MONGO'))
program.parse(process.argv);