import styles from './card.module.css';
import Pokeapi from '../poke_api';
const Card =(id) => {
    return(
        <div className={styles.card}>
            <img src={Pokeapi.getPokemonSprites(id,'front_default')} alt="poke" />
        </div>
    );
};

export default Card;