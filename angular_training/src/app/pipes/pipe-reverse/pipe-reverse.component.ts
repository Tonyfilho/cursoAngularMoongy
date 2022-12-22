import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { PipesService } from '../pipes.service';
import { IServers } from 'src/app/_share/_models/iServices.model';

@Component({
  selector: 'app-pipe-reverse',
  templateUrl: './pipe-reverse.component.html',
  styleUrls: ['./pipe-reverse.component.css']
})
export class PipeReverseComponent implements OnInit {

  filterStatus:string = "";
  localdata: Observable<IServers[]>;

  constructor(private pipesService: PipesService) {
     this.localdata = pipesService.getServesDummy();

  }

  ngOnInit(): void {
  }

  getStatusClasses(server: { instanceType: string; name: string; status: string; started: Date; }) {
    return this.pipesService.getStatusClasses(server)
  }



}
