import { Injectable } from '@angular/core';
import { Product } from './product/product.model';

/* @Injectable({
  providedIn: 'root'
}) */
export class MockService {

  getproduct(): Product{
    return new Product(0, "Samsung", "Na berra tambem", 1350);
  }

  constructor() { }
}
