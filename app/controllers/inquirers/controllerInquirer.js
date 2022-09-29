const inquirer = require("inquirer");
const controlLocal = require("../controller.js");

function inquirerCrearTasca(usuari) {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "nomTasca",
        message: "Com es diu la nova tasca?",
      },
      {
        type: "input",
        name: "estat",
        message: "Estat de la tasca?",
      },
      {
        type: "input",
        name: "dataInici",
        message: `Data d'inici de la tasca?`,
      },
      {
        type: "input",
        name: "dataFinal",
        message: "Quan acabarà la nova tasca?",
      },
    ])
    .then(async (answers) => {
      let id = await controlLocal.buscarUltimId() + 1;
        //Local
        controlLocal.crearTasca(
            usuari,
            answers.nomTasca,
            answers.estat,
            answers.dataInici,
            answers.dataFinal,
            id
            );
            
            //MongoDB
            
            //Mysql
            
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function inquirerBorrarTasca(){
    controlLocal.llistarTotesLesTasques();
    console.log(`\n`)
    return inquirer
    .prompt([
      {
        type: "number",
        name: "idTasca",
        message: "Id de la tasca a borrar?",
      },
      
    ])
    .then((answers) => {
        //Local
        controlLocal.borrarTasca(answers.idTasca);
            
            //MongoDB
            
            //Mysql
            
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

module.exports = {
  inquirerCrearTasca,
  inquirerBorrarTasca,
  // ...
};
