import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockPitComponent implements OnInit {
 @Output("cockPitElementsRed")  cockPitElementsRed: EventEmitter<any>= new EventEmitter<{type: string, name: string, content: string}>();
 @Output("cockPitElementsBlue")  cockPitElementsBlue: EventEmitter<any>= new EventEmitter<{type: string, name: string, content: string}>();
  newServerName:any = '';
  newServerContent:any = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.cockPitElementsRed.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.cockPitElementsBlue.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
