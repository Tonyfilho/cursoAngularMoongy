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
   image = ''
  constructor() {
    console.log('Forcaste no construtor, vem Undefined: ', this.forecastWithSwitch)
  }
  /**Permite ter acesso aos dados depois q o conteudo foi iniciado, pois foi Recebido do componente PAI 
   * que manda um OBSERVABLE q recebemos ele via INPUT()
   */
  ngAfterContentInit(): void {
    console.log('Forcaste dentro do COntent: ', this.forecastWithSwitch);
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
