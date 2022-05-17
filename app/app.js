const fs = require('fs');
const { runInThisContext } = require('vm');

// Create Read JSON. Nombre Funcion = GetData(). => Devuelve una array (data)

// Create Write JSON.  Nombre Funcion = WriteData(). => Desde una array 

// Buscar en Array. Nombre function = SearchArray(int) => Entrar un numero entero (idObj) y devuelve un objeto.

// Crear Clase Todo : 

let todoIds = 0;

class Todo {
  constructor(userName, text){
    this.idObj = ++todoIds;
    this.userName = userName;
    this.text = text;
    this.state = "pending";
    this.initDate = new Date();
    this.complDate = null;
  }
}

const todo1 = new Todo ("enric", "fer to do" );
//{"idObj": 1,"userName":"someName 1", "descr":"some text 1", "state": "pending", "initDate": "2022-05-17T10:32:13.539Z", "complDate": null}
console.log(todo1);

const todo2 = new Todo ("pepe", "fer git" );
console.log(todo2);



// Save JSON
printJson() {
  fs.writeFile('todo.json', JSON.stringify(this.jocs), (error) => {
      if (error) {
          throw error;
      }
  });
}


// Read JSON
let fileName = 'todo.json';
// La Array LLegida del JSON 
let taulaConv = JSON.parse(fs.readFileSync(fileName, 'utf8'));