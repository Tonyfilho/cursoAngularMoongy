import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projection',
  template: `
    <section class="wrapper">
      <h2>Projection Component</h2>

      <ng-content select="#um"></ng-content>

      <p>Texto dentro da projection component</p>

      <ng-content select="#dois"></ng-content>

    </section>
  `,
  styles: [`
    .wrapper{background: yellow}
  `],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
