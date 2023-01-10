import express from "express";

const router = express.Router();

export const error404 = router.get( '*', ( req, res ) => {
  res.status( 404 ).json( { error: '404 Not Found' } );
} );


