import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamer-father',
  templateUrl: './gamer-father.component.html',
  styleUrls: ['./gamer-father.component.css']
})
export class GamerFatherComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(gameControlNumber: number) {
    console.log("dentro do GamerFather: " + gameControlNumber);
    gameControlNumber % 2 ?  this.oddNumbers.push(gameControlNumber): this.evenNumbers.push(gameControlNumber);
  }

}
