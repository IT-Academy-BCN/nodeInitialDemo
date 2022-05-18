const fs = require('fs');
const Todo = require('./classTodo.js');

  // Create Read JSON. Nombre Funcion = GetData(). => Devuelve una array (data)
// Save JSON
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

 console.log(readData());

 let array = 
 [
  {
    idObj: 1,
    description: 'some text 1',
    state: 'pending',
    initDate: '2022-05-17T10:32:13.539Z',
    completDate: null,
    userName: 'someName 1'
  },
  {
    idObj: 34,
    description: 'some text 2',
    state: 'executing',
    initDate: '2022-05-17T10:32:13.539Z',
    completDate: null,
    userName: 'someName 1'
  },
  {
    idObj: 56,
    description: 'some text 2',
    state: 'completed',
    initDate: '2022-05-17T10:32:13.539Z',
    completDate: '2022-05-17T10:32:13.539Z',
    userName: 'someName 2'
  },
  {
    idObj: 34,
    description: 'some text 1',
    state: 'pending',
    initDate: '2022-05-17T10:32:13.539Z',
    completDate: null,
    userName: 'someName 1'
  },
  {
    idObj: 84,
    description: 'some text 2',
    state: 'executing',
    initDate: '2022-05-17T10:32:13.539Z',
    completDate: null,
    userName: 'someName 16'
  },
  {
    idObj: 85,
    description: 'some text 3',
    state: 'executing',
    initDate: '2022-05-17T10:32:13.539Z',
    completDate: null,
    userName: 'someName 16'
  },
  {
    idObj: 86,
    description: 'some text 3',
    state: 'executing',
    initDate: '2022-05-17T10:32:13.539Z',
    completDate: null,
    userName: 'someName 16'
  }
];

// Create Write JSON.  Nombre Funcion = WriteData(). => Desde una array 
 let writeData = (enterArray) => {
    fs.writeFile('./todo.json', JSON.stringify(enterArray), (error) => {
      if (error) {
          throw error;
      }
  });
};

 //writeData(array);
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
