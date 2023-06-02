import { Component, OnInit } from '@angular/core';
import { PipesService } from './../../pipes/pipes.service';

@Component({
  selector: 'app-pipes-customs',
  templateUrl: './pipes-customs.component.html',
  styleUrls: ['./pipes-customs.component.css']
})
export class PipesCustomsComponent implements OnInit {

  servers: any[] = [];
  constructor(private pipesService: PipesService) {
    this.servers = [... pipesService.serversDummy];
   }

  ngOnInit(): void {
  }

  getStatusClasses(server: { instanceType: string; name: string; status: string; started: Date; }) {
    return this.pipesService.getStatusClasses(server)
  }


}
