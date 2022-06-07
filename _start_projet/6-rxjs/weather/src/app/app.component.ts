import { catchError, debounceTime, EMPTY, Observable, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Weather Obserbles com SwitchMap
      </h1>
      <hr>
      <input type="text" placeholder="enter city" [formControl]="searchCity" />

      <pre>{{weather}}</pre>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  private baseWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = "&units=metric&appid=f78fb4c7fe94d411d8a24639b4f69366";

  searchCity: FormControl = new FormControl();

  weather!: string;

constructor(private http:HttpClient){}

ngOnInit(): void {

  this.searchCity.valueChanges
    .pipe(
      debounceTime(400),
      switchMap(city => this.getWeather(city))
    ).subscribe(
      {
        next: res => this.weather = `
          Temperatura Atual: ${res.main.temp} ºC,
          Humidade: ${res.main.humidity}
        `,
        error: err => () => console.log('Erro Inesperado')
      }
    );

}

  getWeather(city: string): Observable<any> {
    return this.http.get(this.baseWeatherURL+city+this.urlSuffix)
      .pipe(
        catchError(err => {
          if(err.status === 404) {
            console.log('Cidade Não Encontrada');
          }
          return EMPTY;
        })
      )
  }



}
