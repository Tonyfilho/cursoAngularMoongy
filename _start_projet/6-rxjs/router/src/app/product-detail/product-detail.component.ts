import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <h3> Product detail for Product id: {{productId}}</h3>
  `,
  styles: ['h3{background:cyan}']
})
export class ProductDetailComponent implements OnInit {
  productId!:string | null;


  constructor(private route:ActivatedRoute) {
    //this.productId = this.route.snapshot.paramMap.get('id');
   this.route.paramMap.subscribe(param => this.productId = param.get('id'));
   }

  ngOnInit() {
  }

}
