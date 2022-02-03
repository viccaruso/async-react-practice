import { checkError, client } from './client';

export async function fetchAllPokemon() {
  const response = await client
    .from('pokemon-db')
    .select();

  return checkError(response);
}

export async function fetchAllMotorcycles() {
  const response = await client
    .from('motorcycles')
    .select();

  return checkError(response);
}

export async function fetchAllDogs() {
  const response = await client
    .from('dogs')
    .select();

  return checkError(response);
}