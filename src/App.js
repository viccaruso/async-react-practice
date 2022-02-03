import logo from './logo.svg';
import './App.css';
import { fetchAllPokemon } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';

function App() {
  const [arrOfPokemon, setArrOfPokemon] = useState([]);

  async function fetchPokemon() {
    const data = await fetchAllPokemon();
    setArrOfPokemon(data);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <PokemonList arrOfPokemon={arrOfPokemon} />
      
    </div>
  );
}

export default App;
