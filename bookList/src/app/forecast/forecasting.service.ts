import { Observable, EMPTY, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForecastingService {
  /////////////////// . WEATHER ///////////////////

  // para a chamada a api do tempo
  private baseWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = '&units=metric&appid=f78fb4c7fe94d411d8a24639b4f69366';
  constructor(private HttpClient: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.HttpClient.get(`${this.baseWeatherURL}+${city}+${this.urlSuffix}`).pipe(
      catchError((err: any) => {
        if (err.status === 404) {
          console.error('Cidade não encontrada');
        }
        return EMPTY;
      })
    );
  }
} // end class
