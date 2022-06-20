import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
  providers:[ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
