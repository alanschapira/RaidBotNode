const pokemon = require('./pokemon');

const getPokemonIdByAny = pokemonIdentifier => {
  const pokemonId = Number(pokemonIdentifier);
  if (pokemonId && isValidId(pokemonId)) {
    return pokemonId;
  }
  const pokemonName = getPokemonIdByName(pokemonIdentifier);

  return pokemonName;
};

const isValidId = id => !!pokemon[id];

const getPokemonNameById = id => {
  const pokemonName = pokemon[Number(id)];
  return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
};

const getPokemonIdByName = name => {
  const lowerCaseName = name.toString().toLowerCase();
  const pokemonId = Object.keys(pokemon).find(key => pokemon[key] === lowerCaseName);
  return Number(pokemonId);
};

module.exports = {getPokemonNameById, getPokemonIdByName, getPokemonIdByAny};
