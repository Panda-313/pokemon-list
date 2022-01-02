import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number>;
  title = 'cosmose';

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
