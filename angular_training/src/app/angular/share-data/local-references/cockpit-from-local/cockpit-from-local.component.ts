import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit-from-local',
  templateUrl: './cockpit-from-local.component.html',
  styleUrls: ['./cockpit-from-local.component.css']
})
export class CockpitFromLocalComponent implements OnInit {

  @Output("cockPitElementsRed")  cockPitElementsRed: EventEmitter<any>= new EventEmitter<{type: string, name: string, content: string}>();
  @Output("cockPitElementsBlue")  cockPitElementsBlue: EventEmitter<any>= new EventEmitter<{type: string, name: string, content: string}>();
  @Input("localLabel") localLabel: string = '';
   newServerName:any = '';
   newServerContent:any = '';
   constructor() { }

   ngOnInit(): void {
   }
   onAddServer(cockpitNameInput:HTMLInputElement) {
    console.log(cockpitNameInput)
     this.cockPitElementsRed.emit({
       type: 'server',
       name: cockpitNameInput.value,
       content: this.newServerContent
     });
   }

  
}
