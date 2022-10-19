'use strict';

const Tirada = require('../models/tirada_mysql.js');
const Jugador = require('../models/jugador_mysql.js');
const tirarDados = require('../helpers/tirarDados');

const hacerTirada = async (req, res) => {
    const jugadorId = req.params.id;
    const { dado1, dado2, resultado, ganaPartida } = tirarDados();

    try {
        //Buscar jugadorx para saber si ya existe.
        const encontrarJugador = await Jugador.findByPk(jugadorId);

        if(!encontrarJugador) { // Necesitamos esto pq si unx jugadorx NO existe no puede hacer una tirada.
            res.status(400).send({ message: "Usuarix no encontradx. Por favor, vuelve a intentarlo." });
        }

        const tiradaActual = await Tirada.create({
            dado1,
            dado2,
            resultado,
            ganaPartida,
            jugadorId
        });

        calcularPorcentajeExito(encontrarJugador);
        res.status(200).json({ tiradaActual });

    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

// Borra las tiradas de unx jugadorx

const borrarTiradas = async (req, res) => {

    const { id } = req.params;
    try {
      const encontrarJugador = await Jugador.findByPk(id);
      
      if(!encontrarJugador) {
        res.status(400).send("El jugador no existe. Vuelve a intentarlo.");
      }
      //Borrar registro jugadorx
      await Tirada.destroy({
        where: { jugadorId: id}
      });
      await Jugador.update(
        { exitoPorcentaje: null},
        { where: {id: id}}
      );
      res.status(200).json({
        encontrarJugador
      });

    } catch(err) {
      res.status(500).send({message: err.message});
    }
  };

//Devuelve la lista de tiradas de unx jugadorx
const tiradasJugador = async(req, res) => {
    const {id} = req.params;

    try {
        const tiradas = await Tirada.findAll({
            where: {jugadorId: id},
        });

        res.status(200).json({tiradas});

    } catch(error) {
        return res.status(404).json({message: error});
    }
};

const calcularPorcentajeExito = async (jugador) => {
    const totalTiradas = await Tirada.count({
        where: {
            jugadorId: jugador.id
        }
    });
    const jugadasGanadoras = await Tirada.count({
        where: {
            ganaPartida: true,
            jugadorId: jugador.id,
        }
    });

    jugador.exitoPorcentaje = (jugadasGanadoras / totalTiradas) * 100;
    await jugador.save();

};

 module.exports = { 
    hacerTirada, 
    borrarTiradas,
    tiradasJugador
 };