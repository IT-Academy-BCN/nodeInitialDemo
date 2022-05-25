const writeData = require('./writedata');
const readData = require('./readdata');
const searchById = require('./searchbyid');

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

module.exports = deleteTask;