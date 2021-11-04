import React from 'react';
import '../styles/PokemonList.scss';
import Pokemon from '../components/Pokemon.jsx';
import useGetPokemons from '../hooks/useGetPokemons';
const API = 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=898';

const PokemonList = () => {
    //Getting all pokemons
    const pokemons = useGetPokemons(API);
    return (
        <section>
            <div className="PokemonList">
                {pokemons.map(pokemon => (
                    <Pokemon pokemon={pokemon} key={pokemon.name} />
                ))}
            </div>
        </section>
    );
}

export default PokemonList;
