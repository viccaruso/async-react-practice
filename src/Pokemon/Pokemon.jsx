import React from 'react';

export default function Pokemon({ pokemon }) {
  return <div className='pokemon'>
    <p>Pokémon: {pokemon.name}</p>
    <p>Type I: {pokemon.primary_type}</p>
    <p>Type II: {pokemon.secondary_type}</p>
    <p>Pokédex ID: {pokemon.id}</p>
  </div>;
}
