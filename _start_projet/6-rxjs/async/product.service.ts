import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Product{
  id: number,
  title: string,
  price: number,
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id:0, title: 'produto1', price: 145},
    {id:1, title: 'produto2', price: 567},
    {id:2, title: 'produto3', price: 890},
  ];

  constructor() { }

  getProducts():Observable<Product[]> {
    return of(this.products);
  }
}
