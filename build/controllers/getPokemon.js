"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const buscarPokemon = (id) => {
        let x = axios_1.default(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => (res = {
            nom: res.data.species.name,
            pes: res.data.weight,
        }));
        return x;
    };
    res.send(yield buscarPokemon(id));
});
exports.default = getPokemon;
