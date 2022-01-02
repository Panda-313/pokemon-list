import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {ApiPokemonResponse} from "../interfaces/api-pokemon-response.interface";
import {ApiPokemon} from "../interfaces/api-pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) { }

  getAllPokemons(): Observable<ApiPokemon[]> {
    return this.httpClient.get<ApiPokemonResponse>(this.url).pipe(map(response => response.results), catchError(() => of([])))
  }
}
