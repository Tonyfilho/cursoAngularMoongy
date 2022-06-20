import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuoterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
