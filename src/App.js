import logo from './logo.svg';
import './App.css';
import { fetchAllPokemon, fetchAllMotorcycles } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import PokemonList from './Pokemon/PokemonList';
import MotorcyclesList from './Motorcycles/MotorcyclesList';

function App() {
  const [arrOfPokemon, setArrOfPokemon] = useState([]);
  const [arrOfMotorcycles, setArrOfMotorcycles] = useState([]);

  async function fetchPokemon() {
    const data = await fetchAllPokemon();
    setArrOfPokemon(data);
  }

  async function fetchMotorcycles() {
    const data = await fetchAllMotorcycles();
    setArrOfMotorcycles(data);
  }

  useEffect(() => {
    fetchPokemon();
    fetchMotorcycles();
  }, []);

  return (
    <div className="App">
      <PokemonList arrOfPokemon={arrOfPokemon} />
      <MotorcyclesList arrOfMotorcycles={arrOfMotorcycles} />
    </div>
  );
}

export default App;
