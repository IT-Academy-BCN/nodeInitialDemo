const program = require('commander');
//const Remove = require('../cmds/delete');
//const remove = new Set() 
  program
    .command('json')
    .alias('j')
    .description('Buscar en Json')
    .action(() => console.log('Buscando en Json'))
  program
    .command('sql')
    .alias('s')
    .description('Buscar en SQL')
    .action(() => console.log('Buscando en SQL'))
  program
    .command('mongo')
    .alias('m')
    .description('Buscar en Mongo')
    .action(() => console.log('Buscando en MONGO'))

program.parse(process.argv);