import React, {useState, useEffect, useCallback} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function Card (
    pokemon
    ) 
 
{


    console.log('THis is pokemon, ', pokemon)
    // return a presentation component which displays a short version of the blog post
    return (
        <div className = "card" id = {pokemon.id}
        style={{ backgroundImage: `url(${pokemon.picture})` }}
        >
                <h1 className = "name">{pokemon.name}</h1>
                <button id="button" >Find out more!</button>
        </div>
    )
}             

export default Card