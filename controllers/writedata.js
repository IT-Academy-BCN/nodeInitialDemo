const fs = require('fs');

// Write JSON.  Nombre Funcion = WriteData(). => Desde una array 
let writeData = (enterArray) => {

  // Write JSON
  fs.writeFile('./models/todo.json', JSON.stringify(enterArray), (error) => {
    if (error) {
        throw error;
    }
  });

};


module.exports = writeData;