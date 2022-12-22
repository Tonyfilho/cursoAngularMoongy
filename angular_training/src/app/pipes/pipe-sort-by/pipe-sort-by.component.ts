import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IServers } from 'src/app/_share/_models/iServices.model';
import { PipesService } from '../pipes.service';

@Component({
  selector: 'app-pipe-sort-by',
  templateUrl: './pipe-sort-by.component.html',
  styleUrls: ['./pipe-sort-by.component.css']
})
export class PipeSortByComponent implements OnInit {


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
