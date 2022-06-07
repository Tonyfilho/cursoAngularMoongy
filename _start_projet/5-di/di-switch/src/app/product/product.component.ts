import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  template: `
    <article>
      <h1>Product Details</h1>
      <h2>Title: {{product.title}} </h2>
      <h2>Description: {{product.description}}</h2>
      <h2>Price: {{product.price | currency : "EUR"}} </h2>
    </article>
  `,
  styles: [
  ],
 /*  providers:[ProductService] */
})
export class ProductComponent implements OnInit {

  product!: Product;

  constructor(private productService:ProductService) {
    this.product = productService.getproduct();
   }

  ngOnInit(): void {
  }

}
