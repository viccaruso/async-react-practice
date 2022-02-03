import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ arrOfPokemon }) {
  return (
    <div>
      {arrOfPokemon.map((pokemon, i) => <Pokemon key={pokemon + i} pokemon={pokemon} />)}
    </div>
  );
}
