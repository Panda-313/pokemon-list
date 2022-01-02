import {ApiPokemon} from "./api-pokemon";

export interface ApiPokemonResponse {
  count: number;
  next: string;
  previous?: any;
  results: ApiPokemon[];
}
