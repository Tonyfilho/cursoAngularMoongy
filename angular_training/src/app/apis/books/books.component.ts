import { Book } from 'src/app/_share/_models/book.model';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './book/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
   books: Book[] = [];
  constructor(private bookService: BooksService) {
   // console.log(bookService.getBooks())
  }

  ngOnInit(): void {
    this.bookService.getBooks().forEach(book => {this.books.push(book)});

  }

}
