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
  fs.writeFile('./todo.json', JSON.stringify(enterArray), (error) => {
    if (error) {
        throw error;
    }
  });
};




const searchById = ((dataInput, idInput) => {
  index = dataInput.findIndex(task => task.taskId === idInput);
  return index;
})






































































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
  console.log(data);
  index = searchById(data,idInput);
  let currentTask = data[index];
  console.log(index);
  if(!currentTask) {return 'Task not found.'};
   currentTask.state = stateInput;
   writeData(data);
   console.log(`The task with id ${currentTask.taskId} is ${currentTask.state}`);
  }


//Virtually no difference between listTask and showTaskState????????
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
  
updateTask('pending');
showTaskState(84);






















