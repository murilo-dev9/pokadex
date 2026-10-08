import {useState, useEffect} from 'react';
import styles from './card.module.css';
import Pokeapi from '../poke_api';

const Card = ({ id,direction }) => {
    const [sprite, setSprite] = useState('');

    useEffect(() => {
        const fetchSprite = async () => {
            const spriteData = await Pokeapi().getPokemonSprites(id, direction);
            setSprite(spriteData);
        };
        fetchSprite();
    }, [id, direction]);

    return(
        <div className={styles.card}>
            <img src={sprite} alt="poke" />
        </div>
    );
};

export default Card;