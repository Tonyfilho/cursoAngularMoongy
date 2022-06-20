import { Component, OnInit } from '@angular/core';
import { MockService } from '../mock.service';
import { ProductService } from '../product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product2',
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
  /* providers:[{provide: ProductService, useClass: MockService}] */
})
export class Product2Component implements OnInit {

  product!: Product;
  

  constructor(private productService:ProductService) {
    this.product = productService.getproduct();
   }

  ngOnInit(): void {
  }

}
