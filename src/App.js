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
      <div>
        <h1>Pokémans</h1>
        <PokemonList arrOfPokemon={arrOfPokemon} />
      </div>
      <div>
        <h1>Motorscoots</h1>
        <MotorcyclesList arrOfMotorcycles={arrOfMotorcycles} />
      </div>
      <div>
        <h1>Doggos</h1>
        <DogList arrOfDogs={arrOfDogs} />
      </div>
      <div>
        <h1>Presidentials</h1>
        <PresidentList arrOfPresidents={arrOfPresidents} />
      </div>

    </div>
  );
}

export default App;
