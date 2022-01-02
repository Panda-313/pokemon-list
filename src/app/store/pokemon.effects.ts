import {Injectable} from "@angular/core";
import {catchError, EMPTY, map, mergeMap, of, withLatestFrom} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PokemonService} from "../modules/pokemon/services/pokemon.service";
import {loadAllPokemons, loadAllPokemonsSuccess} from "./pokemon.actions";
import {Store} from "@ngrx/store";
import {AppState, selectPokemons} from "./pokemon.selectors";

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() => this.actions$.pipe(
      ofType(loadAllPokemons),
      withLatestFrom(this.store.select(selectPokemons)),
      mergeMap((state) => {
          const request = state[1].length > 0 ? of(state[1]) : this.pokemonService.getAllPokemons();
          return request.pipe(
            map(pokemons => loadAllPokemonsSuccess({pokemons})),
            catchError(() => EMPTY)
          )
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) {
  }
}
