import './App.css';
import { fetchAllPokemon, fetchAllMotorcycles, fetchAllDogs } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import PokemonList from './Pokemon/PokemonList.jsx';
import MotorcyclesList from './Motorcycles/MotorcyclesList.jsx';
import DogList from './Dogs/DogList';

function App() {
  const [arrOfPokemon, setArrOfPokemon] = useState([]);
  const [arrOfMotorcycles, setArrOfMotorcycles] = useState([]);
  const [arrOfDogs, setArrOfDogs] = useState([]);

  async function fetchPokemon() {
    const data = await fetchAllPokemon();
    setArrOfPokemon(data);
  }

  async function fetchMotorcycles() {
    const data = await fetchAllMotorcycles();
    setArrOfMotorcycles(data);
  }

  async function fetchDogs() {
    const data = await fetchAllDogs();
    setArrOfDogs(data);
  }

  useEffect(() => {
    fetchPokemon();
    fetchMotorcycles();
    fetchDogs();
  }, []);

  return (
    <div className="App">
      <PokemonList arrOfPokemon={arrOfPokemon} />
      <MotorcyclesList arrOfMotorcycles={arrOfMotorcycles} />
      <DogList arrOfDogs={arrOfDogs} />
    </div>
  );
}

export default App;
