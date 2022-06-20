import { Observable } from 'rxjs';
import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon',
  template: `
    <section class="amazon">
      <h1>Amazon Component</h1>
      <p>Criterio de pesquisa: {{ searchFor$ | async}} </p>
    </section>
  `,
  styles: [`
    .amazon{background: tomato}
  `]
})
export class AmazonComponent implements OnInit {

  searchFor$!: Observable<string>;

  constructor(private state: StateService) {}
  ngOnInit(): void {
    this.searchFor$ = this.state.getState();
  }

}
