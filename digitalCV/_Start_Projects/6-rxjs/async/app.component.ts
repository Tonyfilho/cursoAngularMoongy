
import { Component } from '@angular/core';
import { interval, Observable, take } from 'rxjs';
import { Product, ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Async Pipe
      </h1>
      <hr>
     <!--  <h2>
       Observable sem Async Pipe:  {{numbers}}
      </h2> -->
      <h2>
       Observable Com Async Pipe:  {{numbers$ | async}}
      </h2>

      <hr>
      <ul>
        <li *ngFor="let product of products$ | async ">
          {{product.title}} - {{product.price | currency}}
        </li>
      </ul>
      <hr>
      <!-- <ul>
        <li *ngFor="let product of products ">
          {{product.title}} - {{product.price | currency}}
        </li>
      </ul> -->

      <ul *ngIf="(products$ | async) as products">
        <li *ngFor="let product of products ">
          {{product.title}} - {{product.price | currency}}
        </li>
      </ul>



  `,
  styles: []
})
export class AppComponent {

  numbers$!: Observable<number>;
  /* numbers!: number; */

  products$!: Observable<Product[]>
  /* products!: Product[]; */

  constructor(private productService: ProductService){

    this.numbers$ = interval(1000).pipe(take(10));
    /* this.numbers$.subscribe( n => this.numbers = n); */

    this.products$ = productService.getProducts();/*
    this.products$.subscribe( p => this.products = p); */

  }

}
