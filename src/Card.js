import React, {useState, useEffect, useCallback} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function Card (
    pokemon
    ) 
 
{
    // return a presentation component which displays a short version of the blog post
    return (
        <div className = "card" id = {pokemon.id}
        style={{ backgroundImage: `url(${pokemon.picture})` }}
        >
                <h1 className = "name">{pokemon.name}</h1>
                <Link className = "link" to={`/pokemon/${pokemon.id + 1}`}>Read More</Link>
        </div>
    )
}             

export default Card