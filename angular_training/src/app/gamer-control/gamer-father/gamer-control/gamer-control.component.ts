import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamer-control',
  templateUrl: './gamer-control.component.html',
  styleUrls: ['./gamer-control.component.css']
})
export class GamerControlComponent implements OnInit {

  @Output("gamer") gamer: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }


  startGamer() {}

  stopGamer(){}

}
