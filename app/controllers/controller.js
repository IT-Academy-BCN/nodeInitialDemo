const fs = require("fs/promises");
const path = require("path");
const Tasca = require("../models/model");

const controlLocal = {
  async crearTasca(usuari, nomTasca, estat, dataFinal) {
    try {
      let id;
      let cargarFitxer = await fs.readFile( "./app/database/todo.json", {encoding:'utf8'});
      cargarFitxer = JSON.parse(cargarFitxer);
      console.log(cargarFitxer.length);
      if(cargarFitxer.length==0){
        id = 0;
      }else{
        id = cargarFitxer[cargarFitxer.length - 1]["id"] + 1;
      }

      let novaTasca = new Tasca(
        usuari,
        nomTasca,
        estat,
        dataFinal,
        id
      ); 
      cargarFitxer.push(novaTasca);
    
      await fs.writeFile("./app/database/todo.json", JSON.stringify(cargarFitxer), {encoding:'utf8'});
      console.log('Nova tasca gravada');
      setTimeout(() => {
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  },

  async borrarFitxer(objecteBusca) {
    try {

      let cargarFitxer = await fs.readFile("./app/database/todo.json", {
        encoding: "utf8",
      }); //cargar fitxer
      let llistatTodo = JSON.parse(cargarFitxer); //converteix en objecte
      let todoTrobat = llistatTodo.findIndex(
        (element) => element['id'] == objecteBusca
      ); //Buscar el PRIMER objecte amb la propietat buscad
      console.log(todoTrobat)
      if(!todoTrobat){
        return "L'objecte no ha sigut trobat a l'array";
      }
  
        llistatTodo.splice(todoTrobat, 1); //Eliminar el primer objecte de l'array
        await fs.writeFile("./app/database/todo.json", JSON.stringify(llistatTodo)); //Sobreescriu tot el fitxer amb el nou array
        return console.log("L'objecte ha sigut el.liminat de l'array");

    } catch (err) {
      console.error(err);
    }
  },

  async actualitzarFitxer(id, propietat, nouValor) {
    try {
        let cargarFitxer = await fs.readFile('./app/database/todo.json', { encoding: 'utf8' }); //cargar fitxer
        let llistatTodo = JSON.parse(cargarFitxer); //converteix en objecte        
        //let propietat = Object.keys(objecteBusca); //Identificar propietat de busca 
        //let todoTrobat = llistatTodo.findIndex(todo => todo[propietat[0]] == objecteBusca[propietat[0]]); //Buscar el PRIMER objecte amb la propietat buscada
        llistatTodo[id][propietat] = nouValor;
        await fs.writeFile('./app/database/todo.json',JSON.stringify(llistatTodo)); //Sobreescriu tot el fitxer amb el nou array
        return console.log("L'objecte ha sigut actualitzat de l'array");
    } catch (err) {
      console.log(err);
    }

  },

  async llistarTotesLesTasques() {
    try {
      let llegirArxiu = await fs.readFile("./app/database/todo.json", {
        encoding: "utf8",
      }); //cargar fitxer
      let tasques = JSON.parse(llegirArxiu); //converteix en objecte
      console.log('Totes les tasques');
      console.table(tasques);
      return tasques;
      setTimeout(() => {
        
      }, 500);

    } catch (err) {
      console.log(err);
    }
  },


  async llistarPerEstat(estatTasca) {

    try {
      let llegirArxiu = await fs.readFile("./app/database/todo.json", {
        encoding: "utf8",
      }); //cargar fitxer

      let tasques = JSON.parse(llegirArxiu); //converteix en objecte
      // console.log("llistat", tasques)

      let estat = estatTasca;
      let count = tasques.length;
      console.log(`//////////// Tasques amb estat : ${estat}`);
      if(count==0){
        console.log('No hi ha tasques amb aquest estat');
      }
      for (let i = 0; i < count; i++) {
        let estatTascaActual = tasques[i].estat;
        if (estatTascaActual === estat) {
          console.table(tasques[i]);
          // console.log(`Usuari: ${tasques[i].usuari}`);
          // console.log(`Tasca: ${tasques[i].nomTasca}`);
          // console.log(`Estat Tasca: ${tasques[i].estat}`);
          // console.log(`Data Inicial: ${tasques[i].dataInici}`);
          // console.log(`Data final: ${tasques[i].dataFinal}`);
          // console.log(`\n`);
        }
      }
    } catch (err) {
      console.log(err);
    }

  }
};


module.exports = controlLocal;
