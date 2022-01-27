#!/usr/bin/env node

const program = require('commander');
const message = require('../src/bienvenida')

program
  .description(message)
  .version('0.0.2','-v, --version','Para consultar la versión del programa')
  .command('add','Crear una nueva tarea').alias('a')
  .command('remove','Eliminar una tarea').alias('r')
  .command('state','Modificar el estado de una tarea').alias('s')
  .command('find','Buscar una tarea').alias('f')

program.parse(process.argv);