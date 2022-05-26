import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/assets/classes/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
book!: Book;
bookId!: number;
  constructor(private bookService: BooksService, private route: ActivatedRoute) {
  // this.bookId = parseInt(route.snapshot.params["book.id"]);
  this.bookId = parseInt(route.snapshot.params["id"]);

  console.log(this.bookId);
  }
    
  ngOnInit(): void {
    this.book = this.bookService.getBookById(this.bookId);
  }

}
