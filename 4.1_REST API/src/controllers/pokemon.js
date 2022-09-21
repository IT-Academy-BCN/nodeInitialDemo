const fetch = require('cross-fetch');

const pokeApi =async(req,res) =>{

try {

    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.id}/`);
    
    //console.log(api);

    if (api.status >= 400) {
      throw new Error("ERROR - El servidor no responde");
    }
      const poke = await api.json();

      res.status(200).send({
          pokemon: {
              name: poke.name,
              height: poke.height,
              weight: poke.weight
          }
      });

   } catch (err) {
      res.status(err.api.status).json({
          status: "Error",
          message: err.message
      });
  };
};

module.exports = pokeApi;
