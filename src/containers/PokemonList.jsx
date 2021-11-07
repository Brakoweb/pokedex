import React from 'react';
import '../styles/PokemonList.scss';
import Pokemon from '../components/Pokemon.jsx';
import useGetPokemonsV2 from '../hooks/useGetPokemons';
import LoadMore from '../components/loadMore.jsx';

const PokemonList = () => {
    //Getting all pokemons
    const pokemons = useGetPokemonsV2();
    pokemons.sort((a, b) => (a.id - b.id));
    return (
        <section>
            <div className="PokemonList">
                {pokemons.map((pokemon, index) => (
                    <Pokemon 
                        id = {pokemon.id} 
                        name = {pokemon.name}
                        image = {pokemon.sprites.other.home.front_default}
                        type = {pokemon.types[0].type.name}
                        key = {index} 
                    />
                ))}
            </div>
            <div className="Container">
                <LoadMore />
            </div>
        </section>
    );
}

export default PokemonList;
