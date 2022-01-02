import {Action, createReducer, on} from "@ngrx/store";
import {loadAllPokemons, loadAllPokemonsSuccess, setActivePokemon} from "./pokemon.actions";
import {ApiPokemon} from "../modules/pokemon/interfaces/api-pokemon";

export interface PokemonState {
  pokemonsAreLoading: boolean,
  pokemonsList: ApiPokemon[],
  activePokemon: ApiPokemon | null
}

export const pokemonState: PokemonState = {
  pokemonsAreLoading: true,
  pokemonsList: [],
  activePokemon: null
};

const _pokemonReducer = createReducer(
  pokemonState,
  on(loadAllPokemons, (state) => {
    return {
      ...state,
      pokemonsAreLoading: true
    }
  }),
  on(loadAllPokemonsSuccess, (state, {pokemons}) => {
    return {
      ...state,
      pokemonsAreLoading: false,
      pokemonsList: pokemons
    }
  }),
  on(setActivePokemon, (state, {pokemonName}) => {
    return {
      ...state,
      activePokemon: state.pokemonsList.find(pokemon => pokemon.name === pokemonName) || null
    }
  }),
);

export function pokemonReducer(state: PokemonState | undefined, action: Action): PokemonState {
  return _pokemonReducer(state, action);
}
