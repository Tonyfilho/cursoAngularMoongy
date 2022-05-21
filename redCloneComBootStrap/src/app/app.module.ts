import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent
   
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FatherComponent,
    SonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
