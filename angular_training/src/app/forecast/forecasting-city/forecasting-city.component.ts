import { SecundBlock } from '../../_share/_models/secundBlock.model';
import { FirstBlock } from '../../_share/_models/fistBlock.model';
import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ForecastingService } from '../forecasting.service';

@Component({
  selector: 'app-forecasting-city',
  templateUrl: './forecasting-city.component.html',
  styleUrls: ['./forecasting-city.component.css']
})
export class ForecastingCityComponent implements OnInit, AfterContentInit {
  @Input() forecastWithSwitch: any = {}
  // @Input() image: any = '';
   image: any = '';
  @Output() closeModalEvent = new EventEmitter<any>();

  openOrCloseModal = 'block'
  wheatherCity = '';
  firstBlock!: FirstBlock;
  secundBlock!: SecundBlock;

  constructor(private fs: ForecastingService) {
   // console.log('Forcaste no construtor, vem Undefined: ', this.forecastWithSwitch)
  }
  ngOnInit(): void {
    this.fs.imageResponse.subscribe(data => this.image = data);
  }
  /**Permite ter acesso aos dados depois q o conteudo foi iniciado, pois foi Recebido do componente PAI
   * que manda um OBSERVABLE q recebemos ele via INPUT()
   */
  ngAfterContentInit(): void {
    /**EX:  Destructions a Var é o que esta dentro , ou seja a ultima {sys:{country: country}  */
    // let {sys:{country: country, sunrise: sunrise, sunset: sunset},   } = this.forecastWithSwitch[0];
    // console.log(country, sunrise, sunset);

    /**
     * atribuindo valores ao Objeto de forma imperativa  */
     const firstBlockObj: FirstBlock = {
      name: this.forecastWithSwitch['name'],
      country: this.forecastWithSwitch?.sys['country'],
      sunrise: this.forecastWithSwitch?.sys['sunrise'],
      sunset: this.forecastWithSwitch?.sys['sunset'],
      weather: this.forecastWithSwitch?.weather[0]['description'],
      main: this.forecastWithSwitch?.weather[0]['main'],
      totalClouds: this.forecastWithSwitch.clouds['all']
     };
      this.firstBlock = new FirstBlock(firstBlockObj);


      const secundBockObj: SecundBlock  = {
        speed: this.forecastWithSwitch['wind']?.speed,
        temp_min: this.forecastWithSwitch?.main['temp_min'],
        temp_max: this.forecastWithSwitch?.main['temp_max'],
        temperature: this.forecastWithSwitch?.main['temp'],
        pressure: this.forecastWithSwitch?.main['pressure'],
        humidity:this.forecastWithSwitch?.main['humidity'],
        timezone: this.forecastWithSwitch['timezone']

      }

      this.secundBlock = new SecundBlock(secundBockObj);
    }


  /**
   * Close the modal
   */
  closeModal() {
    this.openOrCloseModal = 'none';
    this.closeModalEvent.emit({ openOrCloseModal: this.openOrCloseModal, isOpen: false });

  }

  /**
   *
   * @param text Format the 1º lettle of word to upcase()
   * @returns
   */
  formtTheFirstLetter(text: string) {
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
