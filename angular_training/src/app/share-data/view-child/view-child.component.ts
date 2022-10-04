import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

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
