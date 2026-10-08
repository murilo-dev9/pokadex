
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

const getPokemonSprites = async (id, direction='front_default') => {
  const response = await fetch(`${base}pokemon/${id}`);
  const data = await response.json();
  return data.sprites[direction];
}
return {
  getPokemon,
  getPokemonDetails,
  getPokemonSprites
}

}

export default pokeapi;
