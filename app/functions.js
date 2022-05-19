const fs = require('fs');
var Todo = require('./classTodo.js');

// Create Read JSON. => Retorna una array (data)
let readData = () => {

  // La Array LLegida del JSON 
  let readArrav = JSON.parse(fs.readFileSync('./todo.json', 'utf8'));
  return readArrav;

}


// Create Write JSON. => Des d'e 'una array 
let writeData = (enterArray) => {

  // Write JSON
  fs.writeFile('./todo.json', JSON.stringify(enterArray), (error) => {
    if (error) {s
      throw error;
    }
  });

};

// Create Search by Id => Des d'una Array i un objId
const searchById = ((dataInput, idInput) => {
  return dataInput.findIndex(task => task.idObj === idInput);
})


//addTask() Function
const addTask = (userNameInput,taskNameInput) => {
  // read todo From Json 
  let data = readData();
  // Find New Task Id
  let newTodoId = data[data.length - 1].idObj + 1;
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




































































