import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface Product{
  id:string,
  title: string,
  price: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  products$!: Observable<Product[]>

  constructor(private http: HttpClient){

    let httpHeaders = new HttpHeaders()
                          .set('Content-Type', 'application/json)')
                          .set('Authorization', 'Basic QWERTY');
    let httpParams = new HttpParams()
                          .set('title', 'tituloXpto')


    this.products$ = this.http.get<Product[]>('/data/products.json', {
      headers: httpHeaders,
      params: httpParams,
    });
  }

}
