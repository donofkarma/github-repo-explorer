/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemonList
// ====================================================

export interface GetPokemonList_pokemon_v2_pokemon {
  __typename: 'pokemon_v2_pokemon';
  name: string;
}

export interface GetPokemonList {
  /**
   * fetch data from the table: "pokemon_v2_pokemon"
   */
  pokemon_v2_pokemon: GetPokemonList_pokemon_v2_pokemon[];
}
