import Game from "../models/games.js";
import User from "../models/users.js";

export const getRanking = async ( req, res ) => {
  try {
    const users = await User.findAll();
    const usersList = users.map( ( { id, username } ) => ( { id, username } ) );

    for ( const user of usersList ) {
      const games = await Game.findAll( { where: { jugadorId: user.id } } );
      if ( games.length > 0 ) {
        const wins = games.filter( ( game ) => game.winner === true );
        const percentage = ( wins.length / games.length ) * 100;
        user.percentage = Math.round( percentage * 100 ) / 100;
      } else {
        user.percentage = 0;
      }
    }
    // calcula el percentatge mig de tots els jugadors
    const totalPercentage = usersList.reduce( ( acc, user ) => acc + user.percentage, 0 );
    const averagePercentage = Math.round( ( totalPercentage / usersList.length ) * 100 ) / 100;
    usersList.sort( ( a, b ) => b.percentage - a.percentage );


    res.status( 200 ).json( {
      ranking: usersList,
      PercentatgeMigExitTotsJugadors: averagePercentage
    } );

  } catch ( error ) {
    res.status( 500 ).json( {
      message: error.message
    } );
  }
};

export const getLoser = async ( req, res ) => {
  try {
    const users = await User.findAll();
    const usersList = users.map( ( { id, username } ) => ( { id, username } ) );

    for ( const user of usersList ) {
      const games = await Game.findAll( { where: { jugadorId: user.id } } );
      if ( games.length > 0 ) {
        const wins = games.filter( ( game ) => game.winner === true );
        const percentage = ( wins.length / games.length ) * 100;
        user.percentage = Math.round( percentage * 100 ) / 100;
      } else {
        user.percentage = 0;
      }
    }
    usersList.sort( ( a, b ) => a.percentage - b.percentage );

    res.status( 200 ).json( {
      loser: usersList[ 0 ]
    } );

  } catch ( error ) {
    res.status( 500 ).json( {
      message: error.message
    } );
  }
};


export const getWinner = async ( req, res ) => {
  try {
    const users = await User.findAll();
    const usersList = users.map( ( { id, username } ) => ( { id, username } ) );

    for ( const user of usersList ) {
      const games = await Game.findAll( { where: { jugadorId: user.id } } );
      if ( games.length > 0 ) {
        const wins = games.filter( ( game ) => game.winner === true );
        const percentage = ( wins.length / games.length ) * 100;
        user.percentage = Math.round( percentage * 100 ) / 100;
      } else {
        user.percentage = 0;
      }
    }
    usersList.sort( ( a, b ) => b.percentage - a.percentage );

    res.status( 200 ).json( {
      winner: usersList[ 0 ]
    } );

  } catch ( error ) {
    res.status( 500 ).json( {
      message: error.message
    } );
  }
};
