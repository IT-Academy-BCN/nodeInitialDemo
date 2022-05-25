const fs = require('fs');

// Read JSON. Nombre Funcion = readData(). => Devuelve una array (data)
let readData = () => {
  
  // Read JSON
  let fileName = './models/todo.json';
  // La Array LLegida del JSON 
  let readArray = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  return readArray;
};


module.exports = readData;