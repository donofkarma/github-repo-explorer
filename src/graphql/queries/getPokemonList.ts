import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
  query GetPokemonList {
    pokemon_v2_pokemon(limit: 10) {
      name
    }
  }
`;
