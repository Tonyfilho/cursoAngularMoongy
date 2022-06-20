import { debounceTime } from 'rxjs';
import { StateService } from './../state.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <input type='text' placeholder='pesquisar Produto' [formControl]="searchInput">
  `,
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(debounceTime(400))
      .subscribe( val => this.state.searchCriteria(val));
  }

}
