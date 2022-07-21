const fs = require('fs/promises');

async function borrarFitxer(objecteBusca) {
    try {
        let cargarFitxer = await fs.readFile('D:/Dades/Francesc/Github_repos/nodeInitialDemo-1/app/models/todo.json', { encoding: 'utf8' }); //cargar fitxer
        let llistatTodo = JSON.parse(cargarFitxer); //converteix en objecte        
        let propietat = Object.keys(objecteBusca); //Identificar propietat de busca 
        let todoTrobat = llistatTodo.findIndex(todo => todo[propietat[0]] == objecteBusca[propietat[0]]); //Buscar el PRIMER objecte amb la propietat buscada
        llistatTodo.splice(todoTrobat,1); //Eliminar el primer objecte de l'array
        await fs.writeFile('D:/Dades/Francesc/Github_repos/nodeInitialDemo-1/app/models/todo.json',JSON.stringify(llistatTodo)); //Sobreescriu tot el fitxer amb el nou array
        return console.log("L'objecte ha sigut el.liminat de l'array");
    } catch (err) {
        console.error(err);
    }
}
//borrarFitxer({ "usuari": "Francesc" });


async function actualitzarFitxer(objecteBusca,nouValor) {
    try {
        let cargarFitxer = await fs.readFile('D:/Dades/Francesc/Github_repos/nodeInitialDemo-1/app/models/todo.json', { encoding: 'utf8' }); //cargar fitxer
        let llistatTodo = JSON.parse(cargarFitxer); //converteix en objecte        
        let propietat = Object.keys(objecteBusca); //Identificar propietat de busca 
        let todoTrobat = llistatTodo.findIndex(todo => todo[propietat[0]] == objecteBusca[propietat[0]]); //Buscar el PRIMER objecte amb la propietat buscada
        llistatTodo[todoTrobat][propietat] = nouValor;
        await fs.writeFile('D:/Dades/Francesc/Github_repos/nodeInitialDemo-1/app/models/todo.json',JSON.stringify(llistatTodo)); //Sobreescriu tot el fitxer amb el nou array
        return console.log("L'objecte ha sigut actualitzat de l'array");
    } catch (err) {
        console.log(err);
    }
}
//actualitzarFitxer({ "usuari": "Francesc" },"Joan");


module.exports = {
    borrarFitxer,
    actualitzarFitxer
}