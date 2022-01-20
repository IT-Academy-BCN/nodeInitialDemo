const program = require('commander');
//const Add = require('../cmds/add');
//const add = new Set();

  program
    .command('json')
    .alias('j')
    .description('Modificar en Json')
    .action(() => console.log('Modificando desde Json'))
  program
    .command('sql')
    .alias('s')
    .description('Modificar en SQL')
    .action(() => console.log('Modificando desde SQL'))
  program
    .command('mongo')
    .alias('m')
    .description('Modificar en Mongo')
    .action(() => console.log('Modificando desde MONGO'))

program.parse(process.argv);