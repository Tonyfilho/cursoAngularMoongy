import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IServers } from 'src/app/_share/_models/iServices.model';
import { PipesService } from '../pipes.service';

@Component({
  selector: 'app-pipe-sort-by',
  templateUrl: './pipe-sort-by.component.html',
  styleUrls: ['./pipe-sort-by.component.css']
})
export class PipeSortByComponent implements OnInit, OnDestroy {
  subscr$?: Subscription;
  localdata!: IServers[];

  constructor(private pipesService: PipesService) {
   pipesService.getServesDummy().subscribe((data: IServers[]) => this.localdata = [...data]);

  }

  ngOnInit(): void {
  }

  getStatusClasses(server: { instanceType: string; name: string; status: string; started: Date; }) {
    return this.pipesService.getStatusClasses(server)
  }

  ngOnDestroy(): void {
    this.subscr$?.unsubscribe();
  }


}
