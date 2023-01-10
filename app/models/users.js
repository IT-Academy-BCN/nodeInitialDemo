import { Schema, model } from "mongoose";

const UserSchema = Schema( {
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  imagen: { type: String },
} );


export default model( 'User', UserSchema );
