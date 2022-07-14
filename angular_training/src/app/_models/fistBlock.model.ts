export class FirstBlock {  

    name: string;
    country: string;
    sunrise: Date | any;
    sunset: Date | any;
    weather: string;
    main:string;
    totalClouds: number


    constructor(firsBlock: FirstBlock){
        this.name = firsBlock.name;
        this.country = firsBlock.country;
        this.sunrise = firsBlock.sunrise;
        this.sunset = firsBlock.sunset;
        this.weather = firsBlock.weather;
        this.main = firsBlock.main;
        this.totalClouds = firsBlock.totalClouds;
    }
  }
  