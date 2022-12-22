import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PipesService } from '../pipes.service';
import { IServers } from 'src/app/_share/_models/iServices.model';

@Component({
  selector: 'app-pipe-reverse',
  templateUrl: './pipe-reverse.component.html',
  styleUrls: ['./pipe-reverse.component.css']
})
export class PipeReverseComponent implements OnInit {

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
