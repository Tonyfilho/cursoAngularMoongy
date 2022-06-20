import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { PriceQuote } from '../iPrice';

@Component({
  selector: 'app-price-quoter',
  template: `
    <section class="price-quoter">
      <h2>Gerador de Valores: </h2>
      <p>Valor a ser gerado aleatoriamente: </p>
      <p> {{priceQuote?.stockSymbol}} - {{priceQuote?.lastPrice | currency}} </p>
    </section>
  `,
  styles: [`
  .price-quoter {
    background-color: lightgreen;
  }
  `]
})
export class PriceQuoterComponent implements OnInit {

  @Output() lastPriceEvent = new EventEmitter<PriceQuote>();

  priceQuote!: PriceQuote;

  constructor() {
    interval(3000).subscribe(
     data => {
       this.priceQuote = {
         stockSymbol: 'MoOngy',
         lastPrice: Math.random() * 100,
       };
       this.lastPriceEvent.emit(this.priceQuote);
     }
    )
  }

  ngOnInit(): void {
  }

}
