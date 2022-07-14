import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/_models/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
book!: Book;
bookId: number | any; /** */
  constructor(private bookService: BooksService, private route: ActivatedRoute) {
  /** Recebendo da forma normal por snapshot , onde ID é a var la do da ROTA*/
  this.bookId = parseInt(route.snapshot.params["id"]);

  /**Recebendo de forma REATIVA via Observable os paramentros  */
  route.paramMap.subscribe(parans =>{ console.log(typeof parans.get('id')), this.bookId = parans.get('id') })

  console.log(this.bookId);
  }

  ngOnInit(): void {
    this.book = this.bookService.getBookById(parseInt(this.bookId));
  }

}
