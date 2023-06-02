import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
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
