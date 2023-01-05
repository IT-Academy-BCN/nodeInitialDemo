import Game from "../models/games.js";


export const tiradaJugador = async ( req, res ) => {
  const { id } = req.params;
  const dado1 = Math.floor( Math.random() * 6 ) + 1;
  const dado2 = Math.floor( Math.random() * 6 ) + 1;

  const winner = dado1 + dado2 >= 7 ? true : false;

  try {
    const game = new Game( {
      dado1,
      dado2,
      jugadorId: id,
      winner
    } );

    await game.save();

    res.status( 201 ).json( {
      msg: 'Tirada guardada',
      game
    } );

  } catch ( error ) {
    res.status( 500 ).json( {
      msg: 'Error inesperado'
    } );
  }
}

