import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-by-service',
  templateUrl: './share-by-service.component.html',
  styleUrls: ['./share-by-service.component.css']
})
export class ShareByServiceComponent implements OnInit {

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
