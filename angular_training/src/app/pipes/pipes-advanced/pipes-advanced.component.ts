import { Component, OnInit } from '@angular/core';
import { PipesService } from '../pipes.service';


interface IServers {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
}
@Component({
  selector: 'app-pipes-advanced',
  templateUrl: './pipes-advanced.component.html',
  styleUrls: ['./pipes-advanced.component.css']
})
export class PipesAdvancedComponent implements OnInit {
  filterStatus:string = "";
  servers: IServers[] = [];
  constructor(private pipesService: PipesService) {
    this.servers = [...pipesService.serversDummy];
  }

  ngOnInit(): void {
  }

  getStatusClasses(server: { instanceType: string; name: string; status: string; started: Date; }) {
    return this.pipesService.getStatusClasses(server)
  }

}
