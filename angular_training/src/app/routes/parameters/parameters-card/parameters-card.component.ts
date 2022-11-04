import { RoutesService } from './../../routes.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/_share/_models/book.model';

@Component({
  selector: 'app-parameters-card',
  templateUrl: './parameters-card.component.html',
  styleUrls: ['./parameters-card.component.css']
})
export class ParametersCardComponent implements OnInit {
  books: Book[] = [];
  constructor(private routerServices: RoutesService) { }

  ngOnInit(): void {
    this.routerServices.getBooks().subscribe((book: Book[]) => {
      return this.books = book;
  })

}

}
