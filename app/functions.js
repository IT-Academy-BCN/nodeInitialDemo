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

  // Write JSON
  fs.writeFile('./todo.json', JSON.stringify(enterArray), (error) => {
    if (error) {
        throw error;
    }
  });

};

// Create Search by Id => Des d'una Array i un objId
const searchById = ((dataInput, idInput) => {
  return dataInput.findIndex(task => task.taskId === idInput);
})


// Crear addTask() Function
const addTask = (userNameInput,taskNameInput) => {
  // read todo From Json 
  let data = readData();
  // Find New Task Id
  let newTodoId = data[data.length - 1].taskId + 1;
  // Create new todo task
  let newTodo = new Todo (newTodoId, userNameInput, taskNameInput );
  // Add New Task to Data Array
  data.push(newTodo);
  // Save data to Json
  writeData(data);
  // Console log
  console.log(`New Task "${taskNameInput}" added by "${userNameInput}"`);
}

// Crear listAll()
const listAll = () => {
  // read todo From Json 
  let data = readData();
  data.forEach(object => {
    // Format Date
    let initDate =  object.initDate.substring(0, 10) + " " + object.initDate.substr(11, 8);
    // Check if Ended Date exists
    let complDate = "Not Finished";
    if (object.state === "completed" )
    {
      complDate = object.initDate.substring(0, 10) + " " + object.initDate.substr(11, 8);
    }
    console.log(`${object.taskId}.- "${object.text}" by ${object.userName}. State = "${object.state}". Start Date = "${initDate}". Ended Date = ${complDate}  `);
  });
}

// Crear deleteTask()
const deleteTask = (inputId) => {
  // read todo From Json 
  let data = readData();
  // Find the Object in the array Data
  let index = searchById (data, inputId);
  // Check if the index exists
  if (index == -1) {
    console.log(`The Task Number ${inputId} Does Not exist.`)
  }
  else {

    // Remove the object from the array data
    var removed = data.splice(index, 1);
    // Save JSON
    writeData(data);
    // Show by Console the Object deleted
    console.log(`Removed ${removed[0].text} Task from to Do List`);
  }

}
deleteTask(88)
/*
- addTask (userNameInput,taskNameInput) => Enric
- listTask(taskId) => Marie
- listAll() => Enric
- updateTask(taskId)=> Marie
- deleteTask(taskId) => Enric
- showTaskState(taskId) returns {(pending/ executing/ completed), init date, completation date, userId}
*/

































































/*
//lists all tasks, takes numTask id = position in array passed as argument
const listTask = (numId) => {
  data = searchById(numId);
  console.log(data);
}

listTask(3);
*/

/*
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
      result = 'Not valid.';
    break;
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
  
*/






















