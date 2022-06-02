import { FormControl } from '@angular/forms';
import { ForecastingService } from './forecasting.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { debounceTime, switchMap } from 'rxjs';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit, AfterViewInit {
  // @ViewChild('modalErro') modalErro!: ElementRef;
  searchCity: FormControl = new FormControl();
  forecastWithoutSwitch = {};
  forecastWithSwitch = {};
  isNotExist!: boolean;
  constructor(private fs: ForecastingService) {
    /**usando o serviço sem SWITCHMAP somente o Subscribe para cada stream */
    // this.searchCity.valueChanges.subscribe(values => {
    //   fs.getWeather(values).subscribe(forecast => { this.forecastWithoutSwitch = forecast,  console.log(this.forecastWithoutSwitch)});
    // });
    this.searchCity.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((values) => {
        fs.getWeather(values).subscribe((forecast) => {
          (this.forecastWithoutSwitch = forecast),
            console.log('Sem SwiftMap', this.forecastWithoutSwitch);
        });
      });

    /** com SwitchMap, basta ter 1 subscrição para as 2 streams, o Switchmap pega os valores q estão na STREAM do FormControl
     * e manda para dentro da Stream de TEMPO q temos no Serviço ForecastingService, fazendo somente uam Subscrição.
     */

    this.searchCity.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((city: any) => {
          return fs.getWeather(city);
        })
      )
      .subscribe({
        next: (sucess) => {
          (this.forecastWithSwitch = sucess),
            console.log('Com SwiftMap', this.forecastWithSwitch);
        },
        error: (err) => {
          console.error(`error no request: ${err}`), (this.isNotExist = true);
        },
        complete: () => {},
      });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  findWeather() {
   
    
    return false;
  }

  //   constructor(private elementRef:ElementRef) {}

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.querySelector('my-element')
  //                                 .addEventListener('click', this.onClick.bind(this));
  // }

  // onClick(event) {
  //   console.log(event);
  // }
}
