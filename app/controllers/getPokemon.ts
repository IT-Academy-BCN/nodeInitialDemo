import axios from 'axios'
import {Request, Response} from 'express'

const getPokemon = async (req: Request, res: Response) => {
  const id:number = parseInt(req.params.id)  
  const buscarPokemon = async (id: number): Promise<object> => {
    let x = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
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
