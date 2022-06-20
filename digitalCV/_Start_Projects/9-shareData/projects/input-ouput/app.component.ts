import { PriceQuote } from './iPrice';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->

      <div>
        <div style="text-align:center" class="content">
          <h1>
            Input - Output
          </h1>
          <hr>
          <h2>Ordem de Compra:</h2>
          <input
            type="text"

            placeholder="Accao a Comprar?"
            (change)="onChangeEvent($event)"
          />

          <app-price-quoter (lastPriceEvent)="onLastPriceEvent($event)"></app-price-quoter>

          <section>
            <h3>A receber do Price-quoter component:</h3>
            <p> {{priceQuote?.stockSymbol}} - {{priceQuote?.lastPrice | currency}} </p>
          </section>

          <app-order
            [quantity]="numberOfShare"
            [stockSymbol]="stock"
            [lastPrice]="priceQuote?.lastPrice | currency">
          </app-order>
      </div>


  `,
  styles: []
})
export class AppComponent {

  stock!: string;
  readonly numberOfShare : number = 100;

  priceQuote!: PriceQuote;


  onChangeEvent({target:{value}}: any){
    this.stock = value;
  }

  onLastPriceEvent(e: PriceQuote){
    this.priceQuote = e;
  }

}
