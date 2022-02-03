import './App.css';
import { fetchAllPokemon, fetchAllMotorcycles, fetchAllDogs, fetchAllPresidents } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import PokemonList from './Pokemon/PokemonList.jsx';
import MotorcyclesList from './Motorcycles/MotorcyclesList.jsx';
import DogList from './Dogs/DogList.jsx';
import PresidentList from './Presidents/PresidentList';


function App() {
  const [arrOfPokemon, setArrOfPokemon] = useState([]);
  const [arrOfMotorcycles, setArrOfMotorcycles] = useState([]);
  const [arrOfDogs, setArrOfDogs] = useState([]);
  const [arrOfPresidents, setArrOfPresidents] = useState([]);

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

  async function fetchPresidents() {
    const data = await fetchAllPresidents();
    setArrOfPresidents(data);
  }

  useEffect(() => {
    fetchPokemon();
    fetchMotorcycles();
    fetchDogs();
    fetchPresidents();
  }, []);

  return (
    <div className="App">
      <PokemonList arrOfPokemon={arrOfPokemon} />
      <MotorcyclesList arrOfMotorcycles={arrOfMotorcycles} />
      <DogList arrOfDogs={arrOfDogs} />
      <PresidentList arrOfPresidents={arrOfPresidents} />
    </div>
  );
}

export default App;
