const writeData = require('./writedata');
const readData = require('./readdata');
const Todo = require('../models/classTodo')

// Crear addTask() Function
const addTask = (userNameInput,taskNameInput) => {
  // read todo From Json 
  let data = readData();
  // Find New Task Id
  let newTodoId = 1;
  if (data.length > 0){
    newTodoId = data[data.length - 1].taskId + 1;
  }
    // Create new todo task
  let newTodo = new Todo (newTodoId, userNameInput, taskNameInput );
  // Add New Task to Data Array
  data.push(newTodo);
  // Save data to Json
  writeData(data);
  // Console log
  console.log(`New Task "${taskNameInput}" added by "${userNameInput}"`);
}

module.exports = addTask;