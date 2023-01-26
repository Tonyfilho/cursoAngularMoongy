import { HttpClassService } from './../http-class.service';


import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit , OnDestroy{
  subs!: Subscription;
  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpClassService: HttpClassService) {
    this.dataIservice = httpClassService.getAll();
  }

  ngOnInit(): void {
   this.subs = this.httpClassService.getAll().subscribe(data => console.log("After Map and FOR IN Transformation : ", data))

  }

  ngOnDestroy(): void {
   this.subs.unsubscribe;
  }
}
