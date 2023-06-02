import { PipesService } from './../../pipes/pipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-basic',
  templateUrl: './pipes-basic.component.html',
  styleUrls: ['./pipes-basic.component.css']
})
export class PipesBasicComponent implements OnInit {
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
