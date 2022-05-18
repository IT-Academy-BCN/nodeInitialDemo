
// Crear Clase Todo : 

class Todo {
  constructor(userName, text){
    this.idObj = null;
    this.userName = userName;
    this.text = text;
    this.state = "pending";
    this.initDate = new Date();
    this.complDate = null;
  }
}

module.exports = Todo;