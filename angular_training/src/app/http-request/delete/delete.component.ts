import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';
import { HttpClassService } from '../http-class.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  dataIservice!: Observable<IdataFireBase[]>;
  constructor(private httpClassService: HttpClassService) {
    this.dataIservice = httpClassService.getAll();
  }

  ngOnInit(): void {
  }

}
