import { AfterContentInit, Component, Input, OnDestroy,  } from '@angular/core';

@Component({
  selector: 'app-forecasting-city',
  templateUrl: './forecasting-city.component.html',
  styleUrls: ['./forecasting-city.component.css']
})
export class ForecastingCityComponent implements  AfterContentInit{
  @Input() forecastWithSwitch: any = {}
   openOrCloseModal = 'block'
   wheatherCity = '';   
   firstBlock: any = {};
   image = ''
  constructor() {
    console.log('Forcaste no construtor, vem Undefined: ', this.forecastWithSwitch)
  }
  /**Permite ter acesso aos dados depois q o conteudo foi iniciado, pois foi Recebido do componente PAI 
   * que manda um OBSERVABLE q recebemos ele via INPUT()
   */
  ngAfterContentInit(): void {
   // console.log('Forcaste dentro do COntent: ', this.forecastWithSwitch);
   /**EX:  Destructions a Var é o que esta dentro , ou seja a ultima {sys:{country: country}  */
  // let {sys:{country: country, sunrise: sunrise, sunset: sunset},   } = this.forecastWithSwitch[0];
  // console.log(country, sunrise, sunset);
     this.firstBlock = {
       name:  this.forecastWithSwitch[0]['name'],
       country: this.forecastWithSwitch[0]?.sys['country'],
       sunrise: this.forecastWithSwitch[0]?.sys['sunrise'],
       sunset : this.forecastWithSwitch[0]?.sys['sunset'],
       weather: this.forecastWithSwitch[0]?.weather[0]['description'],
       main: this.forecastWithSwitch[0]?.weather[0]['main'],
       totalClouds: this.forecastWithSwitch[0].clouds['all']
     };
     console.log(this.firstBlock);
    this.wheatherCity = this.forecastWithSwitch[0]['name'];
    this.image = this.forecastWithSwitch[1];
  }
  
  
  
  /**
   * Close the modal
   */
  closeModal(){
    this.openOrCloseModal = 'none';
    
  }
  
  /**
   * 
   * @param text Format the 1º lettle of word to upcase()
   * @returns 
   */
  formtTheFirstLetter(text : string) {
    let loweredText = text?.toLowerCase();
    let words = loweredText?.split(" ");
    for (let a = 0; a < words?.length; a++) {
      let w = words[a];
      let firstLetter = w[0];        
      w = firstLetter?.toUpperCase() + w.slice(1);
      words[a] = w;
    }
    return words?.join(" ");
  }
  
  
}
