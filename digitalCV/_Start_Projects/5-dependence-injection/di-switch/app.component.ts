import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1> DI - INTRO</h1>
   <hr>
  <app-product></app-product>
  <hr>
  <app-product2></app-product2>
  `,
  styles: []
})
export class AppComponent {
  title = 'di-intro';
}
