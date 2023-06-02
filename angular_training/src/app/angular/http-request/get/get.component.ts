


import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';
import { HiddenButton } from 'src/app/_share/_models/hidden-button';
import { HttpClassService } from '../http-class.service';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit , OnDestroy{
  hiddenButton!: Partial<HiddenButton>;
  subs!: Subscription;
  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpClassService: HttpClassService) {
    this.dataIservice = httpClassService.getAll();

    this.hiddenButton = {
      hiddenButton: true, nameTittle1: "GET Http Request. ",
      nameTittle2: "GET Http Request. ", namePath1: "HttpClassService.service.ts",
      namePath2:"Get Method in the Services before and After Data transformation.", namePath3: "Get.compoment.Ts",
      namePath4:"Get.compoment.HTML", pathImage1:"./../../../assets/img-http-request/00_HttpResquestModuleTS_GET_Method.png",
      pathImage2:  "./../../../assets/img-http-request/02_GET_Console_LOG.png", pathImage3: "./../../../assets/img-http-request/02_GET_Compoment_TS.png",
      pathImage4: "./../../../assets/img-http-request/02_GET_Compoment_HTML.png"
    }


  }

  ngOnInit(): void {
   this.subs = this.httpClassService.getAll().subscribe(data => console.log("After Map and FOR IN Transformation : ", data));
   this.httpClassService.serverEventEmiterHideButton.subscribe(data =>
    {
      this.hiddenButton = {...data}
    })

  }
  deleteInFirebase(item: string) {}

  ngOnDestroy(): void {
   this.subs.unsubscribe;
  }
}
