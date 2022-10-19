//const { Sequelize } = require('sequelize');

const Jugador = require('../models/jugador_mysql.js');

// Crear nuevx jugadorx
const crearJugador = async (req, res) => {
  const userName = req.body.userName;
  try {
    if(!userName || (userName == "")){
      let nuevoJugador = await Jugador.create({});
      res.json(nuevoJugador);
      };

    const buscarJugador = await Jugador.findOne({
      where: {
        userName: userName
      }
    });

    if(buscarJugador !== null) {
      res.status(409).send({error: "Usuarix ya existente. Por favor, inténtalo con uno distinto."});
    } else {
      let nuevoJugador = await Jugador.create({
        userName: userName
      });
      res.status(200).json(nuevoJugador);
    }
    } catch(err) {
      res.status(500).send({
        status: "error",
        message: err.message
      });
    }
 }

 // Modificar el nombre delx jugadorx
  const modificarNombreJugador = async (req, res,  next) => {
  const id = req.params.id;
  const nombre = req.body.userName;  

  try {
    // Para saber si existe unx jugadorx con este ID.
    const buscarJugadorPorId = await Jugador.findByPk(id);
    if(!buscarJugadorPorId) {
      return res.status(400).send({message: "Jugadorx no encontrado."})
    }

    //Para asegurarse que el nombre escogido no se está utilizando ya.
    const encontrarNombreJugador = await Jugador.findOne({
      where: { userName: nombre}
    });

    if(encontrarNombreJugador) {
      return res.status(400).send({message: "El nombre de usuarix ya existe. Por favor, inténtelo con  otro."});
    }

    // Actualizar nombre de usuarix
    const actualizar = await Jugador.update(
      { userName: nombre },
      { where: {id: id} }
    );
    res.status(200).send({
      status: 'Ok',
      message: "Nombre de usuarix actualizado correctamente."
    });

  } catch(err) {
      res.status(500).send({
          status: 'error',
          message: err.message
      })
  }
};

// Devuelve la lista de todxs lxs jugadorxs con su % de éxito
const listaJugadores = async (req, res) => {
  try {

    const jugadores = await Jugador.findAll();
    res.status(200).json(jugadores);
  
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};

module.exports = {
    crearJugador,
    modificarNombreJugador, 
    listaJugadores
    
};