import User from "../models/users.js";

export const tiradaJugador = async ( req, res ) => {
  const { id } = req.params;
  const dado1 = Math.floor( Math.random() * 6 ) + 1;
  const dado2 = Math.floor( Math.random() * 6 ) + 1;

  const winner = dado1 + dado2 >= 7 ? true : false;

  try {
   const userGame = await User
      .findById
      ( id )
      .select( 'games' );

    userGame.games.push( {
      dado1,
      dado2,
      winner
    } );

    await userGame.save();

    res.status( 200 ).json( {
      userGame
    } );


  } catch ( error ) {
    res.status( 500 ).json( {
      msg: 'Error inesperado'
    } );
  }
};


export const getTiradas = async ( req, res ) => {
  const { id } = req.params;

  try {
    const userGame = await User
      .findById
      ( id )
      .select( 'games' );

    res.status( 200 ).json( {
      userGame
    } );

  } catch ( error ) {
    res.status( 500 ).json( {
      msg: 'Error inesperado'
    } );
  }

};


export const deleteTiradas = async ( req, res ) => {
  const { id } = req.params;

  try {
    const userGame = await User
      .findById
      ( id )
      .select( 'games' );

    userGame.games = [];

    await userGame.save();

    res.status( 200 ).json( {
      userGame
    } );

  } catch ( error ) {
    res.status( 500 ).json( {
      msg: 'Error inesperado'
    } );
  }
};
