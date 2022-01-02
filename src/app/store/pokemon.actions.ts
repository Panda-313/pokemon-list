import {createAction, props} from "@ngrx/store";
import {ApiPokemon} from "../modules/pokemon/interfaces/api-pokemon";

export const loadAllPokemons = createAction('[Pokemon] Load All Pokemons');
export const loadAllPokemonsSuccess = createAction('[Pokemon] Load All Pokemons Success', props<{pokemons: ApiPokemon[]}>());
export const setActivePokemon = createAction('[Pokemon] Set Active Pokemon', props<{pokemonName: string}>());
