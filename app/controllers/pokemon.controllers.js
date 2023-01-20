async function getPokemon(req, res) {
  try {
    const { id } = req.params;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await data.json();
    res.status(200).json({
      success: true,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = getPokemon;
