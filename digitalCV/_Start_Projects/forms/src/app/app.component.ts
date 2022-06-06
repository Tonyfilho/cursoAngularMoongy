import { debounceTime } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Observables Forms
      </h1>
      <hr>

      <label for='stockSymbol'>Enter Stock</label>
      <input type="text" id="stockSymbol" [formControl]="stockSymbol"  >


  `,
  styles: []
})
export class AppComponent {

  stockSymbol: FormControl = new FormControl();

  constructor(){
    this.stockSymbol.valueChanges.pipe(
      debounceTime(400)
    ).subscribe(
      stock => this.getStockFromServer(stock)
    )
  }

  getStockFromServer(stock: string){
    console.log(`Valor da Acção ${stock} é atualmente de ${(Math.random()*100).toFixed(3)}`)
  }
}
