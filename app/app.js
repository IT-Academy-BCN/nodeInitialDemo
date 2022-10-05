const preguntaUsuari = require('./controllers/inquirers/usuariInquirer');
const preguntaPersistencia = require('./controllers/inquirers/persistenciaInquirer');
const preguntaMenu = require('./controllers/inquirers/menuInquirer');

/// Inici Programa
console.log("DevTeams Sprint 3.3");

(async function principal() {
  //Menu usuari
  console.log(' /////////////////// Menu usuari ///////////////////');
  const usuari = await preguntaUsuari();

  //Menu persistencia
  console.log(' /////////////////// Menu persistencia ///////////////////');
  const database = await preguntaPersistencia();
  
  ///Menu principal
  console.log(' /////////////////// Menú principal ///////////////////');
  await preguntaMenu(usuari, database);
})();
