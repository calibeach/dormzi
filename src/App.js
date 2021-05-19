import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import axios from 'axios';
import TilePage from "./TilePage"
import InfoPage from "./infoPage"
import './App.css';

function App() {
const [pokemon, setPokemon] = useState([])
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     axios
      .get('http://pokemon.test.dormzi.com/pokemon')
      .then(function (res) {
        let data = res.data
        const subPokemonArray = []
        for (let i = 0; i < 10; i++) {
          subPokemonArray.push(data[i])
        }
        setPokemon((subPokemonArray));
      })
      .then(setIsLoading(false))
      .catch(function (error) {
        console.error(error);
      });
    },[]);

    useEffect(() => {
      console.log('This is pokemon in App, ', pokemon)
      console.log('This is isLoading, ', isLoading)
    }, [pokemon, isLoading])


  return (
    // <h1>testing</h1>
    <div className="App">
    {!isLoading  &&    
      <Router>
      <Route 
            exact path="/" 
            render={props => (<TilePage 
                              {...props} 
                              pokemon={pokemon}/>) }
        />
      <Route 
        exact path="/pokemon/:pokemonID" 
        render={props => (<InfoPage 
                          {...props} 
                          pokemon={pokemon}/>) }
          />  
      </Router>}
    </div>
  )
}

export default App;
