import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/_share/_models/book.model';

@Component({
  selector: 'app-query-parameters',
  templateUrl: './query-parameters.component.html',
  styleUrls: ['./query-parameters.component.css']
})
export class QueryParametersComponent implements OnInit {
  books: Observable<Book[]> | undefined;
  constructor(private routerService: RoutesService, private router: Router) {

   }

  ngOnInit(): void {
    this.books = this.routerService.getBooks();
  }

  /**He I will the the same, pass the value by queryParams and fragments in the file.Ts */
  passByButton(id: number){
    this.router.navigate(['/routes/query-parameters', id, 'edit'], {queryParams: {allowEdit: id +1}, fragment: 'loading'});
  }



}
