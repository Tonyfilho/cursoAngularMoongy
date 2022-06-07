export class SecundBlock {  

    speed: number;
    temp_min: number;
    temp_max: number;
    temperature: number
    pressure: number;
    humidity:number;
    timezone: number


    constructor(firsBlock: SecundBlock){
        this.speed = firsBlock.speed;
        this.temp_min = firsBlock.temp_min;
        this.temp_max = firsBlock.temp_max;
        this.temperature = firsBlock.temperature;
        this.pressure = firsBlock.pressure;
        this.humidity = firsBlock.humidity;
        this.timezone = firsBlock.timezone;
    }
  }
  