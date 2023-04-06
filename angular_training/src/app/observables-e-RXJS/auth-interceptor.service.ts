import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {
   /**
    * 1ª o REQ, ou request é imutable, ou seja caso queiramos modifica lo temos que clonar,
    * 2º podemos clonar URL
    * 3º podemos clonar o HEADERS
    * 4º podemos  params
    */
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request is on its way");
    console.log('console req.url',req.url);
    const modifieldResquest = req.clone({
      headers: req.headers.append('MyAuth', 'component auth-interceptor.services')
    })
   // return next.handle(req);
    return next.handle(modifieldResquest);
  }




}
