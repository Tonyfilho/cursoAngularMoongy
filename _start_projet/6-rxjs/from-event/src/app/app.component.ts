import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        FROM EVENT - Observable
      </h1>
      <hr>

      <label for='stockSymbol'>Enter Stock</label>
      <input type="text" id="stockSymbol" (keyup)="onKeyUpEvent($event)" >
<hr>
      <label for='stockSymbol'>Enter Stock</label>
      <input type="text" id="stockSymbol" #stockSymbol >


  `,
  styles: []
})
export class AppComponent implements AfterViewInit {

  @ViewChild('stockSymbol') stockSymbol!: ElementRef;

  ngAfterViewInit(): void {
      let keyUp$: Observable<any> = fromEvent(this.stockSymbol.nativeElement, 'keyup' );

      keyUp$.pipe(
        debounceTime(400),
        //map(e => e.target.value),
        map(({target:{value}}) => value),
      ).subscribe(
        stock =>
          this.getStockFromServer(stock)
      )
  }


  getStockFromServer(stock: string){
    console.log(`Valor da Acção ${stock} é atualmente de ${(Math.random()*100).toFixed(3)}`)
  }


  onKeyUpEvent(e: any){
    console.log('Stock Value: ', e.target.value);
  }
  /* onKeyUpEvent({target:{value}}: any){
    console.log('Stock Value: ', value);
  } */

}
