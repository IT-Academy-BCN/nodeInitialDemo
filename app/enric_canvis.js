
/*
1.- Línies 10 a 20
Canviar a comprovar si 'todo.json' existeix, i si no existeix crear-lo

2.-  Línies  22 a 32
Canviar a :

const InfoFunction = () => {
	const UsageText = `
Usage :-
$ node app.js addTask "todo item"   # Add a new todo
$ node app.js listTask			        # Show One Task
$ node app.js listAll			          # Show ALL Tasks
$ node app.js updateTask		        # Update One Task
$ node app.js deleteTask NUMBER	    # Delete a todo
$ node app.js showTaskState NUMBER	# Delete a todo
$ node app.js executing NUMBER	    # Complete a todo
$ node app.js completed NUMBER	    # Complete a todo

$ node app.js help			            # Show usage
$ node app.js report		            # Statistics`;

	console.log(UsageText);
};

2.-  Línies  34 a 59: "listFunction"
Canviar TOT. LLegir de la Json, convertir a Array, i mostrar per pantalla tota la info de totes les activitats en un lopp.

3.- 61 a 98. "addFunction"
Canviar TOT. Llegir del JSON, i afegir al final un nou objecte amb tota la informació

4.- 100 al 157. "deleteFunction"
Canviar TOT. LLegir del JSON, i esborrar l'objecte corresponent de la Array.

5.- 159 a 240 " doneFunction" (o updateTask)
Canviar TOT. LLegir JSOn, i canviar el parametre "state" a completed

6.- 242 a 286. "reportFunction"
Esborrar

7.- Afegir "executing" (o updateTask)
Canviar TOT. LLegir JSOn, i canviar el parametre "state" a executing

8.- Afegir "listTask"
 LLegir de la Json, convertir a Array, i mostrar per pantalla tota la info d'una activitat
*/


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