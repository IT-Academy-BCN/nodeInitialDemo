const fs = require('fs');
const Todo = require('./classTodo.js');

// Read JSON. Nombre Funcion = readData(). => Devuelve una array (data)
let readData = () => {
  
  // Read JSON
  let fileName = './todo.json';
  // La Array LLegida del JSON 
  let readArray = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  return readArray;
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













//lists all tasks, takes numTask id = position in array passed as argument
const listTask = (numTask) => {
  let data = readData();
  console.log (data[numTask]);
}

//upDatetask, takes numTask id = position in array passed as argument
const updateTask = (numTask, stateChange) => {
  let result = "";
  let data = readData();
  let currentTask = data[numTask];
  //I understand that you only update the state????
  //Should I include logic looking comparing current 
  //state with selected state.
  if(!currentTask) {return 'Task not found.'};
  switch(stateChange){
    case 'pending':
        return result = 'The task is currently pending';
      break;
    case 'executing':
      currentTask.state = 'executing';
        return result = 'The task is currently executing.';
      break;
    case 'finished':
      currentTask.state = 'finished';
      currentTask.completDate = new Date();
      return result = 'The task has been completed.';
    break;
    default:
    }
    data.push(currentTask);
    writeData(data);
    console.log(result);
}

//Virtually no difference between listTask and showTaskState????????
const showTaskState = (numTask) => {
  let result = "";
  let data = readData();
  let currentTask = data[numTask];
  if (currentTask === null || currentTask === undefined){
    result = 'Task not found';
  } else if (currentTask.completDate === null){
    result = `The state of the task is ${currentTask.state}, it was added ${currentTask.initDate} by userId: ${currentTask.userId}`;
  } else {
    result = `The state of the task is ${currentTask.state}, it was added ${currentTask.initDate} by userID ${currentTask.userId} and completed ${currentTask.completDate} `;
  }
  console.log(result);
}

module.exports = {addTask, listTask, listAll, updateTask, deleteTask, showTaskState};
  























