import {PokemonState} from "./pokemon.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface AppState {
  pokemons: PokemonState
}

export const pokemonsState = createFeatureSelector<PokemonState>('pokemons')

export const selectPokemons = createSelector(
  pokemonsState,
  (state: PokemonState) => state.pokemonsList
);

export const selectPokemonsAreLoading = createSelector(
  pokemonsState,
  (state: PokemonState) => state.pokemonsAreLoading
);

export const selectActivePokemon = createSelector(
  pokemonsState,
  (state: PokemonState) => state.activePokemon
);
