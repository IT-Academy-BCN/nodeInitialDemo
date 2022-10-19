'use strict'

const {sequelize} = require('../bbdd/bd_mysql.js');
const {Model, DataTypes} = require('sequelize');

class Jugador extends Model {};
Jugador.init({
    //"a"tributos de la clase "U"ser:
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      defaultValue: 'Anonimo'
    },
    fechaRegistro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
      // allowNull defaults to true
    },
    exitoPorcentaje: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 0
    }
  }, {
    sequelize,  // Instancia de conexión
    modelName: 'jugador' // Nombre del modelo
  });
  
module.exports = Jugador;