import { HiddenButton } from './../../_share/_models/hidden-button';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';
import { HttpClassService } from '../http-class.service';

@Component({
  selector: 'app-delete',
  templateUrl: '../get/get.component.html', /**O mesmo html e css do get */
  styleUrls: ['../get/get.component.css']
})
export class DeleteComponent implements OnInit {
  hiddenButton:Partial<HiddenButton>;

  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpClassService: HttpClassService) {
    this.hiddenButton = {
      hiddenButton: true, nameTittle1: "GET Http Request. ",
      nameTittle2: "GET Http Request. ", namePath1: "HttpClassService.service.ts",
      namePath2:"Get Method in the Services before and After Data transformation.", namePath3: "Get.compoment.Ts",
      namePath4:"Get.compoment.HTML", pathImage1:"./../../../assets/img-http-request/00_HttpResquestModuleTS_GET_Method.png",
      pathImage2:  "./../../../assets/img-http-request/02_GET_Console_LOG.png", pathImage3: "./../../../assets/img-http-request/02_GET_Compoment_TS.png",
      pathImage4: "./../../../assets/img-http-request/02_GET_Compoment_HTML.png"
    }
    this.dataIservice = httpClassService.getAll();
    this.httpClassService.serverEventEmiterHideButton.next(this.hiddenButton);
  }

  deleteInFirebase() {}


  ngOnInit(): void {
  }

}