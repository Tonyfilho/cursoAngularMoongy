import { Observable, EMPTY, catchError, of, take, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForecastingService {

  private image = new BehaviorSubject<string>('');
  imageResponse = this.image.asObservable();
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
          return of(err);
        }
        return EMPTY;
      })
    ).pipe(take(1));
  }

 /**
  * 
  * @param localImage Receive the image and send by BehaviorSubject<string>(''), will change
  * the image of forecasting-city compoment
  */
  changeImage(localImage:string) {
    this.image.next(localImage);
  }


} // end class
