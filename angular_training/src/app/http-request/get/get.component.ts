import { HttpClassService } from './../http-class.service';


import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit , OnDestroy{
  hiddenButton: boolean = false;
  nameTittle: string = "";
  pathImage1: string = "";
  pathImage2: string = "";
  pathImage3: string = "";
  subs!: Subscription;
  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpClassService: HttpClassService) {
    this.dataIservice = httpClassService.getAll();
  }

  ngOnInit(): void {
   this.subs = this.httpClassService.getAll().subscribe(data => console.log("After Map and FOR IN Transformation : ", data));
   this.httpClassService.serverEventEmiterHideButton.subscribe(data =>
    {
      this.hiddenButton = data['hiddenButton'],
      this.pathImage1 = data['pathImage1'],
      this.pathImage2 = data['pathImage2'],
      this.pathImage3 = data['pathImage3']

    })

  }
  deleteInFirebase() {}

  ngOnDestroy(): void {
   this.subs.unsubscribe;
  }
}
