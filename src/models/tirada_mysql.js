'use strict'

const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../bbdd/bd_mysql.js');
const Jugador = require('./jugador_mysql.js');

class Tirada extends Model {};
Tirada.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dado1:{
        type: DataTypes.INTEGER
    },
    dado2:{
        type: DataTypes.INTEGER
    },
    resultado:{
        type: DataTypes.INTEGER
    },
    ganaPartida:{
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'tirada'
});

// ESTABLECER ASOCIACIÓN DE TABLAS

//Relación 1-n // (1)Jugadorx -- (n)Tiradas
Jugador.hasMany(Tirada);

//Relación 1-1 // (1)Tiradas -- (1)Jugadorx
Tirada.belongsTo(Jugador);

module.exports = Tirada;
