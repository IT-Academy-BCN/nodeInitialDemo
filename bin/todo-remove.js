const program = require('commander');
//const Remove = require('../cmds/delete');
//const remove = new Set() 
program
    .command('json')
    .alias('j')
    .description('Eliminar en Json')
    .action(() => console.log('Eliminando de Json'))
program
    .command('sql')
    .alias('s')
    .description('Eliminar en SQL')
    .action(() => console.log('Eliminando de SQL'))
program
    .command('mongo')
    .alias('m')
    .description('Eliminar en Mongo')
    .action(() => console.log('Eliminando de MONGO'))

program.parse(process.argv);