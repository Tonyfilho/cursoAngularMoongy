import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  template: `
    <article>
      <h1>Product Details</h1>
      <h2>Title: {{product.title}} </h2>
      <h2>Description: {{product.description}} </h2>
      <h2>Price: {{product.price | currency }} </h2>
    </article>
  `,
  styles: [
  ],
  providers:[{provide: ProductService, useClass: ProductService}],
})
export class ProductComponent implements OnInit {

  product!: Product;

  constructor(private productService:ProductService) {
    this.product = productService.getProduct();
   }

  ngOnInit(): void {
  }

}
