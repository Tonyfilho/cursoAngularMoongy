import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books/books.component';
import { BookComponent } from './books/book/book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ForecastComponent } from './forecast/forecast.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForecastingCityComponent } from './forecast/forecasting-city/forecasting-city.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { environment } from '../environments/environment';
import { HotToastModule } from '@ngneat/hot-toast';
import { MyProfileComponent } from './login/my-profile/my-profile/my-profile.component';

/***********************Importações do FireBase ********************/
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage }   from '@angular/fire/storage'
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    NotFoundComponent,
    AboutComponent,
    ForecastComponent,
    ForecastingCityComponent,
    FormsComponent,
    LoginComponent,
    SignUpComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    /**Importação automatica pelo  ng add @angularFire, depois configuração e da
     *  authorization code ele cria a importação automaticamente
     */
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),

    /**Após a instação do NgNeat/tost, fui acrecentado aqui nos imports  */
    HotToastModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
