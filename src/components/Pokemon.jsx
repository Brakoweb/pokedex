import React from "react";
import "../styles/Pokemon.scss";

const Pokemon = ({ id, name, image, type }) => {
    const style = `Pokemon ${type}`
    return (
        <div className={style}>
            <div className="id">#{id}</div>
            <img src={image} alt="" />
            <div className="pokemon-info">
                <div>
                    <p className="name">{name}</p>
                    <p>Type: {type}</p>
                </div>
            </div>
        </div>
    )


}

export default Pokemon;