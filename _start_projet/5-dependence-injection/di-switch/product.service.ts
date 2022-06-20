import { Product } from './product/product.model';
import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root'
}) */
export class ProductService {

  getproduct(): Product{
    return new Product(0, "iPhone", "Caro mas trendy", 1400);
  }

  constructor() { }
}
