import { HiddenButton } from '../../../_share/_models/hidden-button';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';
import { HttpClassService } from '../http-class.service';


@Component({
  selector: 'app-delete',
  templateUrl: '../get/get.component.html', /**The same  file.html and file.css  to  get.Ts and Delete.Ts */
  styleUrls: ['../get/get.component.css'] /**The same  file.html and file.css  to  get.Ts and Delete.Ts */
})
export class DeleteComponent implements OnInit {
  hiddenButton:Partial<HiddenButton>;


  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpClassService: HttpClassService) {
    this.hiddenButton = {
      hiddenButton: false, nameTittle1: "DELETE Http Request. ",
      nameTittle2: "DELETE Http Request. ", namePath1: "HttpClassService.service.ts",
      namePath2:"Delete Method in the Services.", namePath3: "Delete.compoment.Ts",
      namePath4:"Delete.compoment.HTML", pathImage1:"./../../../assets/img-http-request/00_HttpResquestModuleTSDELETE.png",
      pathImage2:  "./../../../assets/img-http-request/03_DELETE_Compoment_HTML.png", pathImage3: "./../../../assets/img-http-request/03_DELETE_Compoment_TS.png",
      pathImage4: "./../../../assets/img-http-request/02_GET_Compoment_HTML.png"
    }
    this.dataIservice = httpClassService.getAll();
   this.httpClassService.serverEventEmiterHideButton.next(this.hiddenButton);
  }

  deleteInFirebase(item: string) {
    this.httpClassService.deleteItem(item);
  }


  ngOnInit(): void {
  }


}
