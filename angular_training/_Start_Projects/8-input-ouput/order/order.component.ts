import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <section class="order">
      <h2>Ordem de Compra</h2>
      <p *ngIf="!!stockSymbol">A efetuar ordem de compra de {{quantity}} acções de {{stockSymbol}} ao preço de {{lastPrice}}</p>
    </section>
  `,
  styles: [`
    .order{
      background-color: tomato;
    }
  `]
})
export class OrderComponent implements OnInit {
  @Input() stockSymbol!: string;
  @Input() quantity!: number;

  @Input() lastPrice!:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
