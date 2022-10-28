import { Observable } from 'rxjs';
import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/_models/book.model';

@Component({
  selector: 'app-query-parameters',
  templateUrl: './query-parameters.component.html',
  styleUrls: ['./query-parameters.component.css']
})
export class QueryParametersComponent implements OnInit {
  books: Observable<Book[]> | undefined;
  constructor(private routerService: RoutesService) {

   }

  ngOnInit(): void {
    this.books = this.routerService.getBooks();
  }

}
