import { AuthInterceptorService } from './observables-e-RXJS/auth-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './_about/about.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { environment } from '../environments/environment';
import { HotToastModule } from '@ngneat/hot-toast';
import { MyProfileComponent } from './login/my-profile/my-profile/my-profile.component';

/***********************Importações do FireBase ********************/
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage'
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularModule } from './angular/angular.module';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
    FormsComponent,
    LoginComponent,
    SignUpComponent,
    MyProfileComponent,



  ],
  imports: [
    BrowserModule,
    AngularModule,
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
    provideFirestore(() => getFirestore()),

    /**Após a instação do NgNeat/tost, fui acrecentado aqui nos imports  */
    HotToastModule.forRoot(),
    provideDatabase(() => getDatabase())

  ],
  /**
   * 1º provide: HTTP_INTERCEPTORS será um token injetado pelo Angular,
   * 2º useClass:  A classe do serviço onde o Interceptor irá atuar.
   * 3º multi: Abilita a possiblidade de ter mais de 1 interceptor
   */
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
