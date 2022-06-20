import { environment } from './../environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productServiceFactory } from './product.factory';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { Product2Component } from './product2/product2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  providers:[
    {provide: ProductService, useFactory: productServiceFactory, deps:['IS_PROD_ENVIRONMENT']},
    {provide:'IS_PROD_ENVIRONMENT', useValue: environment.production}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
