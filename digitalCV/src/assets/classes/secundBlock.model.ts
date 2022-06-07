export class SecundBlock {  

    speed: number;
    temp_min: number;
    temp_max: number;
    sunset: Date | any;
    weather: string;
    main:string;
    totalClouds: number


    constructor(firsBlock: SecundBlock){
        this.speed = firsBlock.speed;
        this.temp_min = firsBlock.temp_min;
        this.temp_max = firsBlock.temp_max;
        this.sunset = firsBlock.sunset;
        this.weather = firsBlock.weather;
        this.main = firsBlock.main;
        this.totalClouds = firsBlock.totalClouds;
    }
  }
  