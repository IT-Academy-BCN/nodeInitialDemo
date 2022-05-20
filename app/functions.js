const fs = require('fs');
const Todo = require('./classTodo.js');

// Read JSON. Nombre Funcion = readData(). => Devuelve una array (data)
let readData = () => {
  
  // Read JSON
  let fileName = './todo.json';
  // La Array LLegida del JSON 
  let readArray = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  return readArray;
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
  return dataInput.findIndex(task => task.taskId == idInput);
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
  let index = searchById (data, inputId)
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

module.exports = {addTask, listTask, listAll, updateTask, deleteTask, showTaskState};