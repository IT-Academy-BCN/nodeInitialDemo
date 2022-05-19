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


//addTask() Function
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

addTask("!enric", "fer el dropo")


/*
const todo1 = new Todo (7, "enric", "fer to do" );
//{"idObj": 1,"userName":"someName 1", "descr":"some text 1", "state": "pending", "initDate": "2022-05-17T10:32:13.539Z", "complDate": null}
console.log(todo1);
*/
/*
- listTask()
- listAll()
- updateTask()
- deleteTask()
- showTaskState() returns {(pending/ executing/ completed), init date, completation date, userId}
*/
































































//lists all tasks, takes numTask id = position in array passed as argument
const listTask = (idInput) => {
  data = readData();
  index = searchById(data,idInput);
  console.log(data[index]);
}



//upDatetask, takes numTask id = position in array passed as argument
const updateTask = (idInput, stateInput) => {
  let result = "";
  let data = readData();
  let index = searchById(data,idInput);
  let currentTask = data[index];
  if(!currentTask) {return 'Task not found.'};
  //assigning new state
   currentTask.state = stateInput;
  //write data
   writeData(data);
   console.log(`The task with id ${currentTask.taskId} is ${currentTask.state}`);
  }


//shows state of task
const showTaskState = (idInput) => {
  let result = "";
  let data = readData();
  let index = searchById(data, idInput);
  console.log(index);
  let currentTask = data[index];
  if (!currentTask){
    result = 'Task not found';
  } else if (currentTask.completDate === null){
    result = `The state of the task is ${currentTask.state}, it was added ${currentTask.initDate} by user: ${currentTask.userName}`;
  } else {
    result = `The state of the task is ${currentTask.state}, it was added ${currentTask.initDate} by user ${currentTask.userName} and completed ${currentTask.completDate} `;
  }
  console.log(result);
}

//module.exports = {addTask, listTask, listAll, updateTask, deleteTask, showTaskState};
  







