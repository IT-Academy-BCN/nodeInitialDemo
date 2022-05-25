const writeData = require('./writedata');
const readData = require('./readdata');
const searchById = require('./searchbyid');


//upDatetask, takes numTask id = position in array passed as argument
const updateTask = (idInput, stateInput) => {
    let result = "";
    let data = readData();
    let index = searchById(data,idInput);
    let currentTask = data[index];
    if (stateInput !== 'executing' && stateInput !== 'pending' && stateInput !== 'completed'){
      return console.log('Input not valid.');
    } else {
    //assigning new state
     currentTask.state = stateInput;
     //assigning date if completed
     if(stateInput === 'completed'){
       currentTask.completDate = new Date();
     }
    //write data
     writeData(data);
     console.log(`The task with id ${currentTask.taskId} is ${currentTask.state}`);
    }
  }

  module.exports = updateTask;