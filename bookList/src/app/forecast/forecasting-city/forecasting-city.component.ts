import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecasting-city',
  templateUrl: './forecasting-city.component.html',
  styleUrls: ['./forecasting-city.component.css']
})
export class ForecastingCityComponent implements OnInit {
  @Input() forecastWithSwitch = {}
  constructor() { }

  ngOnInit(): void {
  }

}
