import React from 'react';

export default function Pokemon({ pokemon }) {
  return <div>
    <p>Pokémon: {pokemon.name}</p>
    <p>Type I: {pokemon.primary_type}</p>
    <p>Type II: {pokemon.secondary_type}</p>
    <p>Pokédex ID: {pokemon.id}</p>
    <hr />
  </div>;
}
