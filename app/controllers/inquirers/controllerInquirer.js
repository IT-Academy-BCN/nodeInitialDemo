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
        type: "list",
        name: "estat",
        message: "Estat de la tasca?",
        choices:['Oberta','Pendent', 'En execució' ,'Tancada']
      },
      {
        type: "number",
        name: "dataFinal",
        message: "Quans dies tardarà en acabar la nova tasca?",
        validate:  function (input) { 
           
            if(isNaN(input)) {
              console.log("error: no es un número")
              return false;
            }
            return true;


            /*
            if(typeof input2 == 'number'){
              return true
            }else{ 
              console.log('Ha de ser un numero')
              return false
            }*/
          
    }
      }
    ])
    .then(async (answers) => {
      let avui = new Date();
      let dateFinal = new Date();
      let sumadies = avui.getDate() + parseInt(answers.dataFinal);
      dateFinal.setDate(sumadies);
        //Local
        await controlLocal.crearTasca(
            usuari,
            answers.nomTasca,
            answers.estat,
            dateFinal,
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

async function inquirerBorrarTasca(usuari,database){
    await controlLocal.llistarTotesLesTasques();
    console.log(`\n`);
      return inquirer
      .prompt([
        {
        type: "number",
        name: "idTasca",
        message: "Id de la tasca a borrar?",
      },
      
    ])
    .then(async (answers) => {
        //Local
        await controlLocal.borrarFitxer(answers.idTasca);
            
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

async function inquirerActualitzarTasca(usuari,database){
  let propietat;
  let id;
     let tasques = await controlLocal.llistarTotesLesTasques();
    // controlLocal.actualitzarFitxer();
    console.log(`\n`);

      
      return inquirer
      .prompt([
        {
                type: "number",
                name: "idTasca",
                message: "Identificador de la tasca a modificar:"
            },
        ])
        .then (async (answerId) => {
            id = answerId.idTasca;
            //console.log(id);
            // console.log(llistatTodo.id);
            console.log(tasques);
            let tascaAModificar = tasques[id];
            console.log(`Usuari: ${tascaAModificar.usuari}`);
            console.log(`Tasca: ${tascaAModificar.nomTasca}`);
            console.log(`Estat Tasca: ${tascaAModificar.estat}`);
            // console.log(`Data Inicial: ${tasques[i].dataInici}`);
            console.log(`Data final: ${tascaAModificar.dataFinal}`);
            console.log(`\n`);

            console.log(`\n`)
            return inquirer
                .prompt([
                    {
                        type: "list",
                        name: "propietatAModificar",
                        choices: ['usuari : ' + tascaAModificar.usuari, 'nomTasca : '+ tascaAModificar.nomTasca, 'estat : '+ tascaAModificar.estat, 'dataFinal : '+ tascaAModificar.dataFinal],
                        message: "Propietat a modificar:"
                    } 
                ])
        }).then (async (answers) => {
            console.log(answers.propietatAModificar);
            propietat =answers.propietatAModificar.split(':')[0].trim();
            return inquirer
                .prompt([
                  {
                    type: "input",
                    name: "valorNouPropietat",
                    message: "Introdueix el nou valor:"
                  }
                ])
              }).then (async (answers) => {
            let nouValor =answers.valorNouPropietat;

            //Local
                await controlLocal.actualitzarFitxer(id, propietat , nouValor)
            //MongoDB
            
            //Mysql
            
          })
          .catch((error) => {
            console.log(error);
          });

};
        
async function inquirerVeureTasca(database){
  console.log('////////// Vols filtrar tasques per estat /////////////////')
  return inquirer
  .prompt([
    {
            type: "list",
            name: "estat",
            message: "Identificador de la tasca a modificar:",
            choices:['Oberta','Pendent', 'En execució' ,'Tancada',new inquirer.Separator(), 'No filtrar']

        },
    ])
    .then (async (answers) => {

        if(answers.estat != 'No filtrar'){

          //Local
          await controlLocal.llistarPerEstat(answers.estat);
          //MongoDB
          
          //Mysql
        }
          
      })
      .catch((error) => {
        console.log(error);
      });

}
        
module.exports = {
  inquirerCrearTasca,
  inquirerBorrarTasca,
  inquirerActualitzarTasca, 
  inquirerVeureTasca
};
