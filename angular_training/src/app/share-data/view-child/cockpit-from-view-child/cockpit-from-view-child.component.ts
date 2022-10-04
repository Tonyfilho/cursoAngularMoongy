import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { ViewChildComponent } from '../view-child.component';

@Component({
  selector: 'app-cockpit-from-view-child',
  templateUrl: './cockpit-from-view-child.component.html',
  styleUrls: ['./cockpit-from-view-child.component.css']
})
export class CockpitFromViewChildComponent implements OnInit {

  @Output("cockPitElementsRed")  cockPitElementsRed: EventEmitter<any>= new EventEmitter<{type: string, name: string, content: string}>();
  @Input("localLabel") localLabel: string = '';
  @ViewChild("cockPitInputName") cockPitInputName!: ElementRef;
   newServerName:any = '';
   newServerContent:any = '';
   constructor() { }

   ngOnInit(): void {
   }
   //@ViewChild é tipado como ElementRef e tb usa-se o AfteViewInit quando precisamos buscar dados Asynchronous
   onAddServer() {
     console.log(this.cockPitInputName);
     this.cockPitElementsRed.emit({
       type: 'server',
       name: this.cockPitInputName.nativeElement.value,
       content: this.newServerContent
     });
   }


}
