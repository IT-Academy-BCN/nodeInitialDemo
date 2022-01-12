const fs = require('fs');
const readline = require('readline');
const welcomeMsg = fs.createReadStream('./messagesApp/welcome.txt');
const helpConsole = fs.createReadStream('./messagesApp/helpFile.txt');

// Crear Interfaz de Lineas de Comando (CLI) (Consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'ToDo APP> \n'
});

// Función procesa textos desde un archivo y los muestra por consola
async function showText(textToShow) {
  const rl = readline.createInterface({
    input: textToShow,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(`${line}`);
  }
}
// Mensaje de bienvenida
showText(welcomeMsg);

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'help':
      showText(helpConsole);
      break;
    case 'create':
      const create = (require('./cmds/create')) //Función que llama a create.js (Crear Tarea)
      create() //Ejecuta create.js llamado previamente
      break;
    case 'update':
      const update = (require('./cmds/update')) //Función que llama a update.js (Modificar Tarea)
      update()//Ejecuta update.js llamado previamente
      break;
    case 'delete':
      const del = (require('./cmds/delete')) //Función que llama a delete.js (Borrar Tarea)
      del()//Ejecuta delete.js llamado previamente
        break;
    case 'show':
      const show = (require('./cmds/show')) //Función que llama a show.js (Mostrar Tarea)
      show()//Ejecuta show.js llamado previamente
      break;
    case 'find':
      const findBy = (require('./cmds/findBy')) //Función que llama a findby.js (Buscar Tarea)
      findBy()//Ejecuta findBy.js llamado previamente
        break;
    case 'exit':
        console.log('Que tengas un buen día!'); // Muestra mensaje de despedida 
        process.exit(0); // Cierra app de consola
    default:
      console.table(`No se reconoce: '${line.trim()}'`); // Mensaje si el comando ingresado no es válido
      break; 
}
  rl.prompt();

}).on('close', () => {
  console.log('Que tengas un buen día!');
  process.exit(0);
}); // Función que cierra la consola 