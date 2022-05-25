const readData = require('./readdata');
const formatDate = require('./formatdate');

// Crear listAll()
const listAll = () => {
  // read todo From Json 
  let data = readData();
  // IF not Data => Show Message
  if (data == 0) {
    console.log("Your To Do List is Empty!!");
    return;
  }
  data.forEach(object => {
    // Check if Ended Date exists
    let complDate = "Not Finished";
    if (object.state === "completed" )
    {
      complDate = formatDate(object.completDate);
    }
    console.log(`${object.taskId}.- "${object.text}" by ${object.userName}. State = "${object.state}". Start Date = "${formatDate(object.initDate)}". Ended Date = ${complDate}  `);
  });
}

module.exports = listAll;