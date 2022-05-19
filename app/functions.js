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


const searchById = (numId =>{
  let data = readData();
  return data.find(task => task.idObj === numId);
})

console.log(searchById(1));

//addTask() Function
const addTask(userInput,taskInput){
  let todo1 = new Todo (7, userInput, taskInput );
}


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
