import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { ApisComponent } from './apis.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastingCityComponent } from './forecast/forecasting-city/forecasting-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { FireBaseAuthApiComponent } from './fire-base-auth-api/fire-base-auth-api.component';




@NgModule({
  declarations: [ApisComponent, ForecastComponent,
    ForecastingCityComponent, BooksComponent,
    BookComponent,
    FireBaseAuthApiComponent,],
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: ApisComponent },
      { path: 'books', component: BooksComponent },
      { path: 'books/:id', component: BookComponent },
      { path: 'forecasting', component: ForecastComponent, },
      { path: 'authRestApiGoggle', component: FireBaseAuthApiComponent, },
    ])
  ]
})
export class ApisModule { }
