import { Schema, model } from "mongoose";

const UserSchema = Schema( {
  username: { type: String, required: true },
  games: [
    {
      dado1: { type: Number },
      dado2: { type: Number },
      winner: { type: Boolean, default: false },
    }
  ]
},
  {
    timestamps: true
  }
);


export default model( 'User', UserSchema );
