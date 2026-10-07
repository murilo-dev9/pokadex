
const pokeapi= () => {
    const base = "https://pokeapi.co/api/v2/";
const getPokemonList = async (limit = 20, offset = 0, id) => {
  const response = await fetch(`${base}pokemon/${id}?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data.results;
}

const getPokemonDetails = async (id) => {
  const response = await fetch(`${base}characteristic/${id}`);
  const data = await response.json();
  return data;
}

const getPokemonSprites = async (id, direction) => {
  const response = await fetch(`${base}pokemon/${id}/sprites/${direction}`);
  const data = await response.json();
  return data.sprites;
}

}

export default pokeapi;
