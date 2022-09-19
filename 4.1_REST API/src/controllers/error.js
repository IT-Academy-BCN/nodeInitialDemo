'use strict';

const error = ((req, res) => {
  res.status(404).json({message:'404',error: "Página no encontrada. // La pàgina no existeix. // Page not found"})
})

module.exports = error;