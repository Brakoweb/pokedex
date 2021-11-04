import React from "react";
import "../styles/Pokemon.scss";

const Pokemon = ({ pokemon }) => {
    return (
        <div className="Pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/0.png" alt="" />
            <div className="pokemon-info">
                <div>
                    <p>{pokemon.name}</p>
                </div>
            </div>
        </div>
    )


}

export default Pokemon;