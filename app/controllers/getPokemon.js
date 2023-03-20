const axios = require("axios")

const getPokemon = async (req, res) => {
  const id = req.params.id
  const buscarPokemon = (id) => {
    let x = axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (res) =>
        (res = {
          nom: res.data.species.name,
          pes: res.data.weight,
        })
    )
    return x
  }
  res.send(await buscarPokemon(id))
}

module.exports = { getPokemon }
