import { Schema, model } from "mongoose";

const UserSchema = Schema( { // TODO - Incrustar Games aquí
  username: { type: String, required: true },
  password: { type: String, required: true },
},
  {
    timestamps: true
  }
);


export default model( 'User', UserSchema );
