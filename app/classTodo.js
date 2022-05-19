
// Crear Clase Todo : 
class Todo {
  constructor(idInput, userInput, textInput){
    this.taskId = idInput;
    this.userName = userInput;
    this.text = textInput;
    this.state = "pending";
    this.initDate = new Date();
    this.complDate = null;
  }
}

module.exports = Todo;