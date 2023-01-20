async function getPokemon(req, res) {
  const { id } = req.params;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await data.json();
  console.log(result.name, result.height, result.weight);
  res.send('test');
}

module.exports = getPokemon;
