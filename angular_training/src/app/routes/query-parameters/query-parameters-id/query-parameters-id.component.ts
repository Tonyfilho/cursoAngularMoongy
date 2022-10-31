import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/_models/book.model';
import { RoutesService } from '../../routes.service';

@Component({
  selector: 'app-query-parameters-id',
  templateUrl: './query-parameters-id.component.html',
  styleUrls: ['./query-parameters-id.component.css']
})
export class QueryParametersIdComponent implements OnInit {
  book?: Observable<Book | undefined>;
  localId: number | any  = 0;
  localName?: string;

  constructor(private routesService:RoutesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    /**Using Observable */
    this.route.params.subscribe((data: Params) =>  {this.localId = data["id"]} );

   this.book = this.routesService.getBookById(parseInt(this.localId));

  }
}
