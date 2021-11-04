import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetPokemonData = (URL) =>{
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(async () =>{
        const response = await axios(URL);
        setPokemonData(response.data);
    }, []);

    return pokemonData;
}

export default useGetPokemonData;