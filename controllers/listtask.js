const readData = require('./readdata');
const searchById = require('./searchbyid');

//lists all tasks, takes numTask id = position in array passed as argument
 const listTask = (idInput) => {
    data = readData();
    index = searchById(data,idInput);
    if(index < 0) {
      return console.log(`Task doesn't exist.`);
    }
    console.log(data[index]);
  }

  module.exports = listTask;