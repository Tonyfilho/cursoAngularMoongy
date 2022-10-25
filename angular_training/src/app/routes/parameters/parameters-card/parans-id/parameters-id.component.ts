import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RoutesService } from './../../../routes.service';
import { Book } from './../../../../_models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters-id',
  templateUrl: './parameters-id.component.html',
  styleUrls: ['./parameters-id.component.css']
})
export class ParametersIdComponent implements OnInit {
  book?: Observable<Book | undefined>;
  localId: number | any  = 0;
  localName?: string;


  constructor(private routesService:RoutesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    /**Or  Using SnapShot*/
    this.localId = this.route.snapshot.params['id'];
    this.localName = this.route.snapshot.params['name'];
    /**Using Observable */
   this.route.params.subscribe(data =>  {this.localId = data["id"], console.log("Into the Observable Var localName: ", this.localName)} );

   this.book = this.routesService.getBookById(parseInt(this.localId));

  }

}
