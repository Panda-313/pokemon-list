import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppState, selectActivePokemon, selectPokemonsAreLoading} from "../../store/pokemon.selectors";
import {Store} from "@ngrx/store";
import {filter, Observable, Subject, takeUntil} from "rxjs";
import {ApiPokemon} from "../pokemon/interfaces/api-pokemon";
import {loadAllPokemons, setActivePokemon} from "../../store/pokemon.actions";

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss']
})
export class SinglePokemonComponent implements OnInit, OnDestroy {
  pokemon$: Observable<ApiPokemon | null> = this.store.select(selectActivePokemon);
  pokemonsLoading$: Observable<boolean> = this.store.select(selectPokemonsAreLoading);
  ngUnsubscribe$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) { }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllPokemons());
    this.pokemonsLoading$.pipe(takeUntil(this.ngUnsubscribe$), filter(isLoaded => !isLoaded)).subscribe(() =>
      this.store.dispatch(setActivePokemon({pokemonName: this.activatedRoute.snapshot.params['name']}))
    )
  }
}
