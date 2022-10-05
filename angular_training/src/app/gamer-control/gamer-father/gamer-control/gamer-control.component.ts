import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamer-control',
  templateUrl: './gamer-control.component.html',
  styleUrls: ['./gamer-control.component.css']
})
export class GamerControlComponent implements OnInit {

  @Output("gameFired") gamerFired: EventEmitter<number> = new EventEmitter<number>();
  interval: number | any; //recebe a função interval
  lastNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  startGamer() {
    this.interval = setInterval(() => {
  this.gamerFired.emit(this.lastNumber + 1);
  // console.log("Game Start: " , this.lastNumber);
  this.lastNumber++;
    },1000);
  }

  stopGamer(){
    clearInterval(this.interval); //stop a intervalo passando a var que recebe a Função interval
  }

}
