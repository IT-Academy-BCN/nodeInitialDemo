const readData = require('./readdata');
const searchById = require('./searchbyid');


//shows state of task
const showTaskState = (idInput) => {
    let result = "";
    let data = readData();
    let index = searchById(data, idInput);
    let currentTask = data[index];
    if (!currentTask || index < 0){
      result = `Task doesn't exist.`;
    } else if (currentTask.completDate === null){
      result = `The state of the task is ${currentTask.state}, it was added ${currentTask.initDate} by user: ${currentTask.userName}`;
    } else {
      result = `The state of the task is ${currentTask.state}, it was added ${currentTask.initDate} by user ${currentTask.userName} and completed ${currentTask.completDate} `;
    }
    console.log(result);
  }

  module.exports = showTaskState;