import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./services/pokemon.service";
import {ApiPokemon} from "./interfaces/api-pokemon";
import {Store} from "@ngrx/store";
import {loadAllPokemons} from "../../store/pokemon.actions";
import {AppState, selectPokemons, selectPokemonsAreLoading} from "../../store/pokemon.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemons$: Observable<ApiPokemon[]> = this.store.select(selectPokemons);
  isLoading$: Observable<boolean> = this.store.select(selectPokemonsAreLoading);

  constructor(private pokemonService: PokemonService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllPokemons());
  }
}
