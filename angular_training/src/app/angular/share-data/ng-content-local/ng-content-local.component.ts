import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ng-content-local',
  templateUrl: './ng-content-local.component.html',
  styleUrls: ['./ng-content-local.component.css']
})
export class NgContentLocalComponent implements OnInit {
  serverElements:any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(event:{ name: string , content:string}) {
    this.serverElements.push({
      type: 'server',
      name: event.name,
      content: event.content
    });
  }

  onAddBlueprint(event:{ name: string , content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.name,
      content: event.content
    });
  }

}
