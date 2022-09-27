const inquirer = require('inquirer');
const controlLocal = require('./controllers/controller.js');

/// MAIN
console.log('DevTeams Sprint 3.3');
console.log('Comença el formulari');
ordrefuncions();

// ordrefuncions();
function ordrefuncions(){
  //console.clear();
  let resposta1 = preguntaInicial();
  return (resposta1)
}

async function preguntaInicial() {
   return inquirer.prompt([
    {
      type: 'list',
      name: 'funcio',
      message: 'Quina funcio vols realitzar?',
      choices: ['Llistar tasques', 'Llistar una tasca', 'Crear una tasca', 'Actualitzar una tasca', 'Borrar una tasca',new inquirer.Separator(),'Sortir programa'],
    }
  ])
    .then((answers) => {
      distribucioPreguntes(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
 

}

async function distribucioPreguntes(primeraResposta) {

  switch (primeraResposta.funcio) {
    case 'Crear una tasca':
      controlLocal.creatasca()
      break;
    case 'Actualitzar una tasca':
      controlLocal.actualitzarFitxer(1, 1);
      break;
    case 'Borrar una tasca':
      controlLocal.borrarFitxer(1);
      break;
    case 'Llistar una tasca':
      controlLocal.llistarPerEstat(1);
      break;
    case 'Llistar tasques':
      controlLocal.llistarTotesLesTasques();
      break;
    case 'Sortir programa':
      console.log('Has sortit del programa')
      break;
  }
}

