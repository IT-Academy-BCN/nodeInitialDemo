/*
Crea una petició GET a l'endpoint /pokemon/{id} que rebi un número de Pokémon, faci una cerca al Pokémon API i retorni el nom del Pokémon, la seva alçada i el seu pes.*/
import fetch from "node-fetch";

const getPokemon = async (req, res) => {
    const {id} = req.params;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    res.json({
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight
    });
};


export default getPokemon;