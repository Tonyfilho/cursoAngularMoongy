import { Observable } from 'rxjs';
import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebay',
  template: `
    <section class="ebay">
      <h1>Ebay Component</h1>
      <p>Criterio de pesquisa: {{ searchFor$ | async}} </p>
    </section>
  `,
  styles: [`
    .ebay{background: cyan}
  `]
})
export class EbayComponent implements OnInit {

  searchFor$!: Observable<string>;

  constructor(private state: StateService) {}
  ngOnInit(): void {
    this.searchFor$ = this.state.getState();
  }

}
