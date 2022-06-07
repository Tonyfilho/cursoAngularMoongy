import { Product } from './product/product.model';
import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root'
}) */
export class ProductService {

  constructor() { }

  getProduct():Product{
    return new Product(0, 'iPhone', "Caro mas trndy", 1400);
  }
}
