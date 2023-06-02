import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PipesService } from './../../pipes/pipes.service';
import { IServers } from 'src/app/_share/_models/iServices.model';



@Component({
  selector: 'app-pipes-advanced',
  templateUrl: './pipes-advanced.component.html',
  styleUrls: ['./pipes-advanced.component.css']
})
export class PipesAdvancedComponent implements OnInit, OnDestroy {
  subscr$!: Subscription;
  filterStatus:string = "";
  localdata: IServers [] = [];

  constructor(private pipesService: PipesService) {
 this.subscr$ =   this.pipesService.getServesDummy().subscribe((data: IServers[]) => {
      this.localdata = [...data];
    })

  }

  ngOnInit(): void {
  }

  getStatusClasses(server: { instanceType: string; name: string; status: string; started: Date; }) {
    return this.pipesService.getStatusClasses(server)
  }

  newServer() {
    let localServer: IServers | any = {};
    localServer.instanceType = "small";
    localServer.name = "New Server";
    localServer.status ="stable";
    localServer.started = new Date(2022,12,25);
    this.pipesService.addNewServerDummy(localServer);

  }
  ngOnDestroy(): void {
    this.subscr$.unsubscribe();
  }

}
