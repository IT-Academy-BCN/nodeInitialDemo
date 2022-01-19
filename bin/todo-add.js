const program = require('commander');
//const Add = require('../cmds/add');
//const add = new Set();
program
  .command('json')
  .alias('j')
  .description('Almacenar en Json')
  .action(() => console.log('Almacenando en Json'))

program
  .command('sql')
  .alias('s')
  .description('Almacenar en SQL')
  .action(() => console.log('Almacenando en SQL'))

  program
  .command('mongo')
  .alias('m')
  .description('Almacenar en Mongo')
  .action(() => console.log('Almacenando en MONGO'))

program.parse(process.argv);