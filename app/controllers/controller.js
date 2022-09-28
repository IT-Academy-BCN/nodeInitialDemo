const fs = require("fs/promises");
const path = require("path");
const Tasca = require("../models/model");

const controlLocal = {
  async crearTasca(usuari, nomTasca, estat, dataInici, dataFinal) {
    try {
      let novaTasca = new Tasca(
        usuari,
        nomTasca,
        estat,
        dataInici,
        dataFinal
      ); 
     
      let cargarFitxer = await fs.readFile( "./app/models/todo.json", {encoding:'utf8'});
      cargarFitxer = JSON.parse(cargarFitxer);
      cargarFitxer.push(novaTasca);
      
      await fs.writeFile("./app/models/todo.json", JSON.stringify(cargarFitxer), {encoding:'utf8'});
      console.log('Nova tasca gravada');
    } catch (error) {
      console.log(error);
    }
  },

  async borrarFitxer(objecteBusca) {
    try {

      let cargarFitxer = await fs.readFile("./app/models/todo.json", {
        encoding: "utf8",
      }); //cargar fitxer
      let llistatTodo = JSON.parse(cargarFitxer); //converteix en objecte
      let propietat = Object.keys(objecteBusca); //Identificar propietat de busca
      let todoTrobat = llistatTodo.findIndex(
        (todo) => todo[propietat[0]] == objecteBusca[propietat[0]]
      ); //Buscar el PRIMER objecte amb la propietat buscada
      llistatTodo.splice(todoTrobat, 1); //Eliminar el primer objecte de l'array
      await fs.writeFile("../models/todo.json", JSON.stringify(llistatTodo)); //Sobreescriu tot el fitxer amb el nou array
      return console.log("L'objecte ha sigut el.liminat de l'array");

    } catch (err) {
      console.error(err);
    }
  },
  //borrarFitxer({ "usuari": "Francesc" });

  async actualitzarFitxer(objecteBusca, nouValor) {
    try {

        let cargarFitxer = await fs.readFile('../models/todo.json', { encoding: 'utf8' }); //cargar fitxer
        let llistatTodo = JSON.parse(cargarFitxer); //converteix en objecte        
        let propietat = Object.keys(objecteBusca); //Identificar propietat de busca 
        let todoTrobat = llistatTodo.findIndex(todo => todo[propietat[0]] == objecteBusca[propietat[0]]); //Buscar el PRIMER objecte amb la propietat buscada
        llistatTodo[todoTrobat][propietat] = nouValor;
        await fs.writeFile('../models/todo.json',JSON.stringify(llistatTodo)); //Sobreescriu tot el fitxer amb el nou array
        return console.log("L'objecte ha sigut actualitzat de l'array");
    } catch (err) {
      console.log(err);
    }

  },


  //actualitzarFitxer({ "usuari": "Francesc" },"Joan");

  async llistarTotesLesTasques() {
    try {
      let llegirArxiu = await fs.readFile("./app/models/todo.json", {
        encoding: "utf8",
      }); //cargar fitxer
      let tasques = JSON.parse(llegirArxiu); //converteix en objecte
      console.log("llistat", tasques);
      let count = tasques.length;
      for (let i = 0; i < count; i++) {
        console.log(`Usuari: ${tasques[i].usuari}`);
        console.log(`Tasca: ${tasques[i].nomTasca}`);
        console.log(`Estat Tasca: ${tasques[i].estat}`);
        console.log(`Data Inicial: ${tasques[i].dataInici}`);
        console.log(`Data final: ${tasques[i].dataFinal}`);
        console.log(`\n`);
      }
    } catch (err) {
      console.log(err);
    }
  },


  async llistarPerEstat(estatTasca) {

    try {
      let llegirArxiu = await fs.readFile("./app/models/todo.json", {
        encoding: "utf8",
      }); //cargar fitxer

      let tasques = JSON.parse(llegirArxiu); //converteix en objecte
      // console.log("llistat", tasques)

      let estat = estatTasca;
      let count = tasques.length;
      console.log(`TASQUES AMB ESTAT: ${estat}`);

      for (let i = 0; i < count; i++) {
        let estatTascaActual = tasques[i].estat;
        if (estatTascaActual === estat) {
          console.log(`Usuari: ${tasques[i].usuari}`);
          console.log(`Tasca: ${tasques[i].nomTasca}`);
          console.log(`Estat Tasca: ${tasques[i].estat}`);
          console.log(`Data Inicial: ${tasques[i].dataInici}`);
          console.log(`Data final: ${tasques[i].dataFinal}`);
          console.log(`\n`);
        }
      }
    } catch (err) {
      console.log(err);
    }

  }
};


module.exports = controlLocal;
