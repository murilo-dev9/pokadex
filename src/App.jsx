import { useState,useRef, useEffect } from 'react'; 
import styles from './App.module.css';
import Card from './components/card/card';
import Pokeapi from './components/poke_api';
const maxPokemonId = 150

function App() {

  const [pokemonId, setPokemonId] = useState(maxPokemonId);


  const listaId  = Array.from({ length: pokemonId }, (_, index) => index + 1);
  


  return (
    <div className={styles.main}>
      <header className={styles.header}> 
        <h1>Pokadex</h1>
      </header>
      <div className={styles.container}>
        {listaId.map((id) => (
          <Card key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

export default App;
