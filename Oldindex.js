const fs = require('fs');
const readline = require('readline');
const welcomeMsg = fs.createReadStream('./messagesApp/welcome.txt');

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