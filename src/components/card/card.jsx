import { useState, useEffect } from 'react';
import styles from './card.module.css';
import Pokeapi from '../poke_api';

const Card = ({ id}) => {
    const [sprite, setSprite] = useState('');
    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
        weight: 0,
        height: 0,
        types: []
    });

    useEffect(() => {
        const fetchSprite = async () => {
            const spriteData = await Pokeapi().getPokemonSprites(id);
            setSprite(spriteData);
        };
        fetchSprite();
    }, [id]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const pokemonData = await Pokeapi().getPokemon(id);
            setPokemon(pokemonData);
        };
        fetchPokemon();
    }, [id]);

    return (
        <div className={styles.Card}>

            <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>
            <p>{pokemon.id}</p>


            <img
                src={sprite}
                alt={pokemon.name}
                style={{ width: '150px', height: '150px' }}
            />

            <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
            <p><strong>Altura:</strong> {pokemon.height / 10} m</p>

            <div>
                <strong>Tipos:</strong>
                {pokemon.types.map((info, index) => (
                    <span key={index} className={styles.tp}>
                        {info.type.name}
                    </span>
                ))}
            </div>
        </div>


    );
};

export default Card;