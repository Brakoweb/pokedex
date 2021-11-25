import React from 'react';
import '../styles/PokemonList.scss';
import Pokemon from '../components/Pokemon.jsx';
import useGetPokemons from '../hooks/useGetPokemons';
import LoadMore from '../components/loadMore.jsx';
const API = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const PokemonList = () => {
    //Getting all pokemons
    const [allPokemons, loadMore] = useGetPokemons(API);

    function btnLoadMore(){
        const obj = {
                abilities: [],
                base_experience: 172,
                forms: [],
                game_indices: [],
                height: 12,
                held_items: [],
                id: 101,
                is_default: true,
                location_area_encounters: "https://pokeapi.co/api/v2/pokemon/152/encounters",
                moves: [],
                name: "chikorita",
                order: 150,
                past_types: [],
                species: {name: 'chikorita', url: 'https://pokeapi.co/api/v2/pokemon-species/152/'},
                sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/152.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/152.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'},
                stats: [],
                types: [{type:{name:'grass'}}],
                weight: 666
        }
        allPokemons.push(obj)
        console.log(allPokemons);
    }
    

    return (
        <section>
            <div className="PokemonList">
                {allPokemons.map((pokemon, index) => (
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
                <LoadMore loadMore={loadMore} />
            </div>
        </section>
    );
}

export default PokemonList;
