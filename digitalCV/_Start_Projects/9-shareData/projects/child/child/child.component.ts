import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>
      ola {{name}}
    </h2>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

  dizerOla(){
    console.log(`Ola Da Child Component: ${this.name}`);
  }

}
