import {useEffect, useState} from 'react';

const useGetPokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    const getAllPokemons = async () => {
        const res = await fetch(loadMore);
        const data = await res.json();

        setLoadMore(data.next);

        function createPokemonObject (result){
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();

                setAllPokemons(currentList => [...currentList, data]);
            });
        }
        createPokemonObject(data.results);
    }

    useEffect(() => {
        getAllPokemons();
    }, []);

    return allPokemons;
}

export default useGetPokemons;