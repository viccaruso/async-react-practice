import React from 'react';
import Pokemon from './Pokemon';
import './Pokemon.css';

export default function PokemonList({ arrOfPokemon }) {
  return (
    <div className='pokemon-list'>
      {arrOfPokemon.map((pokemon, i) => <Pokemon key={pokemon.name + i} pokemon={pokemon} />)}
    </div>
  );
}
