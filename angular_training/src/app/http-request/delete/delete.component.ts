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
  hiddenButton: boolean = true;
  nameTittle: string = "";
  pathImage1: string = "";
  pathImage2: string = "";
  pathImage3: string = "";
  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpClassService: HttpClassService) {
    this.dataIservice = httpClassService.getAll();
    this.httpClassService.serverEventEmiterHideButton.next(this.hiddenButton);
  }

  deleteInFirebase() {}


  ngOnInit(): void {
  }

}
