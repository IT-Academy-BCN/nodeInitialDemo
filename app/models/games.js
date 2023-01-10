import { Schema, model } from "mongoose";

const GameSchema = Schema( {
  dado1: { type: Number, required: true },
  dado2: { type: Number, required: true },
  jugador: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  winner: { type: Boolean, required: true },
},
  {
    timestamps: true,
  }
);


export default model( 'Game', GameSchema );
