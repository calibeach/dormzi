import React, {useState, useEffect, useCallback} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Card from './Card'

function TilePage ({
    pokemon
}) {
    return (
        <div className="tilePage">
            {pokemon.map(({name, picture , id}) => (
              <Card
                name = {name}
                picture = {picture}
                id = {id}
              />
            ))}
        </div>
      );

 }

 export default TilePage