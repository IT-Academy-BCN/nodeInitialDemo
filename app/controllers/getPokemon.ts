
import axios from 'axios'

const getPokemon = async (req: any, res: any) => {
  const id = req.params.id
  const buscarPokemon = (id: number): object => {
    let x = axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (res: any) =>
      (res = {
        nom: res.data.species.name,
        pes: res.data.weight,
      })
    )
    return x
  }
  res.send(await buscarPokemon(id))
}

export default getPokemon
