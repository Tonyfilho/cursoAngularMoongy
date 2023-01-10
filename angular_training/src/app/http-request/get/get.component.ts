import { HttpResquestService } from 'src/app/http-request/http-resquest.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpRequestService: HttpResquestService) {
    this.dataIservice = httpRequestService.featchPost();
   }

  ngOnInit(): void {
  }

}
