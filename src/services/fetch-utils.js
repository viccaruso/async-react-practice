import { checkError, client } from './client';

export async function fetchAllPokemon() {
  const response = await client
    .from('pokemon-db')
    .select();

  return checkError(response);
}