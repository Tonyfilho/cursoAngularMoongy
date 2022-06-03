import { FormControl } from '@angular/forms';
import { ForecastingService } from './forecasting.service';
import {
  AfterViewInit,
  Component,
  OnInit  
} from '@angular/core';
import { debounceTime, switchMap, catchError, EMPTY } from 'rxjs';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit, AfterViewInit {  
  searchCity: FormControl = new FormControl();  
  forecastWithSwitch = {}; 
  displayStyle = "none";
  image = './assets/background/built_day.jpg';
  constructor(private fs: ForecastingService) {
    /**usando o serviço sem SWITCHMAP somente o Subscribe para cada stream */
    // this.searchCity.valueChanges.subscribe(values => {
    //   fs.getWeather(values).subscribe(forecast => { this.forecastWithoutSwitch = forecast,  console.log(this.forecastWithoutSwitch)});
    // });
    this.searchCity.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((values) => {    
        fs.getWeather(values).subscribe({
          next: erro => {},
          error: () => { }
        })        
      }      
      );        
      
    }
    /** com SwitchMap, basta ter 1 subscrição para as 2 streams, o Switchmap pega os valores q estão na STREAM do FormControl
   * e manda para dentro da Stream de TEMPO q temos no Serviço ForecastingService, fazendo somente uam Subscrição.
   */
  ngAfterViewInit(): void {
    this.searchCity.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((city: any) => {
          if(city) {
            return this.fs.getWeather(city)
          }
          
          return EMPTY;
        })
      )
      .subscribe({
        next: (sucess) => {
          (this.forecastWithSwitch = sucess);
          if(sucess.weather){
            return this.changeImageFromApi(sucess.weather[0]['main']);
          }
          else {
           return this.openModalError();
          }           
        },
        error: (err) => {
          console.error(`error no request: ${err}`);
        },
        complete: () => {},
      });  
   
  }

  ngOnInit(): void {}

  

  /**
   * Will open the modal error
   */
  openModalError() {
    this.displayStyle = "block";
    this.searchCity.setValue('');
    this.changeImageFromApi('Default');
  }
  /**
   * will close the modal error
   */
  closeModalError() {
    this.displayStyle = "none";
    this.searchCity.setValue('');
    this.changeImageFromApi('Default');
  }
 /**
  * will change the background-image of the template
 */
  changeImageFromApi(image: string){
    console.log('weather: ', image);
    switch (image) {
      case 'Clear':
        this.image = './assets/background/nuvens_sol.jpg';
        break;
      case 'Clouds':
        this.image = './assets/background/nuvens_scattered.jpg';
        break;
      case 'Fog':
        this.image = './assets/background/nuvens_fog.jpg';
        break;
      case 'Rain':
        this.image = './assets/background/nuvens_rain.jpg';
        break;
      case 'Default':
        this.image = './assets/background/built_day.jpg';
        break;
    
      default:
        this.image = './assets/background/built_day.jpg';
        break;
    }
  }

}
