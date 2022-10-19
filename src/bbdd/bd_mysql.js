const {Sequelize} = require('sequelize'); //Requerir CLASE sequelize
const mysql = require('mysql2/promise');
//const config = require('../config/config');
const { mysqlConfig } = require('../config/config');

//const { port, host, username, password } = require('../config/config');

// Crear nueva conexión instanciando clase Sequelize
const { port, host, username, password } = mysqlConfig;
const bd_nombre = 'unjuegodebromi_bd';

// Instanciar sequelize para crear una nueva conexión
const sequelize = new Sequelize(bd_nombre, username, password, {
    host,
    dialect: 'mysql',
    port,
    define: {
        timestamps: false
    },
    logging: false // Para ver los logs en la terminal comentar esta línia.
});
const connectSequelize = async () => {
    try {
      // Create database if it does not exist/
      const connection = await mysql.createConnection({
        host, 
        port, 
        user: username, 
        password
      });
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${bd_nombre}\`;`);
      await sequelize.sync({ force: false });
      console.log('La conexión con la BDD mySQL se ha establecido correctamente.');
    } catch (error) {
      console.error('Ha sido imposible establecer la conexión con la BDD:', error);
    }
  };
  
module.exports = { connectSequelize, sequelize };