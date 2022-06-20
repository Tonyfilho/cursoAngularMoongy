import { Component } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
    <h1>Observables - Routing</h1>
    <ul>
      <li *ngFor="let product of products"
          (click)="onSelect(product)"
          [class.selected]="product === selectedProduct">
      {{product.id}}: {{product.description}}
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .selected{background:yellowgreen}
    ul{display:flex; justify-content:space-evenly; list-style-type:none}
    `]
})
export class AppComponent {

  selectedProduct!:Product;

  products:Product[] = [
    {id:1, description:"iPhone X"},
    {id:2, description:"Samsung 10"},
    {id:3, description:"Huawei Pro"},
  ]

  constructor(private router:Router){}

  onSelect(prod:Product):void{
    this.selectedProduct = prod;
    this.router.navigate(["/productDetail", prod.id]);
  }


}
