"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const users_1 = __importDefault(require("./routes/users"));
const imgRouter_1 = __importDefault(require("./routes/imgRouter"));
const timeRouter_1 = __importDefault(require("./routes/timeRouter"));
const pokemonRouter_1 = __importDefault(require("./routes/pokemonRouter"));
const nivell2exercici1_1 = __importDefault(require("./middlewares/nivell2exercici1"));
app.use(fileUpload());
app.use(express.json());
app.use(users_1.default); // nivell 1 exercici 1
app.use(imgRouter_1.default); // nivell 1 exercici 2
app.use(nivell2exercici1_1.default, timeRouter_1.default); /// NIVELL 2
app.use(pokemonRouter_1.default); // NIVEL 3
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server iniciado en puerto ${port}`);
});
