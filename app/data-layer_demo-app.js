require('dotenv').config()
const { red, blue, bold } = require("colorette");

demo();

async function demo(){
    console.log("Running demo...");

    const { connect, getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll } = require('./model/Tasks')

    // Connecta la BBDD
    await connect();

    // Restart de database a cada rerun de demo
    await deleteAll();

    // Crea task
    let task1 = {
        description: (blue('Crear TO-DO app')),
        author: (blue('Guillem Parrado'))
        // No cal state: és required però s'inicialitza sol a 'pending'
        // No cal start_date: és required però s'inicialitza sol a current time
    }

    // Guarda task
    await saveNewTask(task1);


    // Crea second task
    let task2 = {
        description: (blue('2nd Task')),
        author: (blue('Laura O'))
    };

    // Save task
    await saveNewTask(task2);

    // Crea third task
    let task3 = {
        description: (blue('3rd Task')),
        author: (blue('Anon.'))
    };

    // Save task
    await saveNewTask(task3);

    // Espero 100ms a que estiguin disponibles a la base de dades (Si triem MongoDB i es fa immediatament no ho estan)
    setTimeout(async ()=> {

        // Recupera tots els tasks
        const tasks = await getAllTasks();
        console.log(blue(tasks));

        // Recupera un task a partir d'una id
        const recovered_1st_task = await getTask(task1.id);      // recupera 1r task
        console.log(blue(recovered_1st_task));

        // Modifica un task
        const recovered_2nd_task = await getTask(task2.id);             // recupera 2n task
        recovered_2nd_task.author = "Patricia Gonzalez";                // treballem sobre task i el modifiquem
        await updateTask(recovered_2nd_task.id, recovered_2nd_task);    // Guardem canvis de tornada a DB

        // Elimina tasks
        await deleteTask(task1.id);    // A partir d'una id
        await deleteTask(task3);       // A partir d'un task

        // Finalment, torno a fer un getAll per comprovar que s'han aplicat els canvis. Hi hauria d'haver només la 2a tasca i amb l'autor modificat.
        console.log(await getAllTasks());

        // Acabo Demo
        process.exit(0);

    }, 100)

    // COMENTARIS FINALS: si ja es té l'objecte en memòria no cal anar-lo recuperant cada cop. Per exemple en aquesta demo task1 i task2 ja estaven en memòria (en aquest cas no calia recuperar-los altre cop per treballar-hi). A UI segurament caldrà recuperar-ho tot per mostrar a usuari i quan aquest seleccioni, es pot passar l'objecte sencer sobre el que treballar en comptes de passar només la id per evitar haver de tornar a recuperar quan es treballi a business logic.
}

