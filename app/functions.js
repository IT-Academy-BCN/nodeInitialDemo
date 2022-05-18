const fs = require('fs');
const Todo = require('./classTodo.js');

// Read JSON. Nombre Funcion = readData(). => Devuelve una array (data)
let readData = () => {
  
  // Read JSON
  let fileName = './todo.json';
  // La Array LLegida del JSON 
  let readArrav = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  return readArrav;
  /*
  if (parametre == "Json") {

    
  }
  else if (parametre == "Mysql"){

  }
  */
}


// Write JSON.  Nombre Funcion = WriteData(). => Desde una array 
let writeData = (enterArray) => {
  fs.writeFile('./todo.json', JSON.stringify(enterArray), (error) => {
    if (error) {
        throw error;
    }
  });
};

// Buscar en Array. Nombre function = SearchArray(int) => Entrar un numero entero (idObj) y devuelve un objeto.

/*

- addTask()
  

const todo1 = new Todo ("enric", "fer to do" );
//{"idObj": 1,"userName":"someName 1", "descr":"some text 1", "state": "pending", "initDate": "2022-05-17T10:32:13.539Z", "complDate": null}
console.log(todo1);

const todo2 = new Todo ("pepe", "fer git" );
console.log(todo2);

- listTask()
- listAll()
- updateTask()
- deleteTask()
- showTaskState() returns {(pending/ executing/ completed), init date, completation date, userId}
*/
