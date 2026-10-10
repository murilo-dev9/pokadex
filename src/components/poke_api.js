
const pokeapi= () => {
    const base = "https://pokeapi.co/api/v2/";
const getPokemon = async (id) => {
  const response = await fetch(`${base}pokemon/${id}`);
  const data = await response.json();
  return data;
}

const getPokemonDetails = async (id) => {
  const response = await fetch(`${base}characteristic/${id}`);
  const data = await response.json();
  return data;
}

const getPokemonSprites = async (id) => {
  const response = await fetch(`${base}pokemon/${id}`);
  const data = await response.json();
  return data.sprites.front_default;
}

const getMaxPokemonId = async () => {
  const response = await fetch(`${base}pokemon?limit=1`);
  const data = await response.json();
  return data.count;
};

return {
  getPokemon,
  getPokemonDetails,
  getPokemonSprites,
  getMaxPokemonId
}

}

export default pokeapi;
