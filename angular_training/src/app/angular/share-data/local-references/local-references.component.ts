import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.css']
})
export class LocalReferencesComponent implements OnInit {

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
