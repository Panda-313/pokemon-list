import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SinglePokemonComponent} from "./single-pokemon.component";

const routes: Routes = [{
  path: '',
  component: SinglePokemonComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePokemonRoutingModule { }
