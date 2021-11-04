import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetPokemons = (API) =>{
    const [pokemons, setPokemons] = useState([]);

    useEffect(async () =>{
        const response = await axios(API);
        setPokemons(response.data.results);
    }, []);

    return pokemons;
}

export default useGetPokemons;