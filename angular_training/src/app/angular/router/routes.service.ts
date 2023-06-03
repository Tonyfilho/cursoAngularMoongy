import { from, Observable, ObservableInput, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/_share/_models/book.model';


@Injectable({
  providedIn: 'root'
})
export class RoutesService {
 private books:Book[] = [];

  constructor () {
   this.books = [
    {
      id: 0,
      title: 'Angular com Typescript',
      author: 'Yakov Fain',
      alreadyRead: true,
      imageUrl: 'angular.jpg',
      imageUrlGr: 'angularGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
    {
      id: 1,
      title: 'Blockchain com JS',
      author: 'Bina Ramahurty',
      alreadyRead: false,
      imageUrl: 'blockchain.jpg',
      imageUrlGr: 'blockchainGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
    {
      id: 2,
      title: 'DeepLearning com JS',
      author: 'Multiple Authors',
      alreadyRead: true,
      imageUrl: 'deeplearning.jpg',
      imageUrlGr: 'deeplearningGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },

  ];
  }
   getBooks(): Observable<Book[]> {
    return of(this.books);
  }
  getBookById(bookId: number): Observable<Book | undefined> {
    const bookfilded: Book | undefined = this.books?.find((b) => b.id === bookId);
    return of(bookfilded);
  }


  getBookIdWithForm(bookId: number): ObservableInput<Book | any> {
   let localBook: Book  | any=  {};
   localBook = this.books.find(book => {book.id === bookId});
  return from(localBook);
  }
  getBookIdWithFormAndDestruiction(bookId: number): ObservableInput<Book | any> {
    const lBook:  Book | any =  this.books.find(book => {book.id === bookId});
    const {id= lBook?.id , title = lBook?.title, author = lBook.author, alreadyRead = lBook.alreadyRead, imageUrl = lBook.imageUrl, imageUrlGr = lBook.imageUrlGr, description = lBook["description"] } = lBook;
  return  from([{id, title, author, alreadyRead, imageUrl, imageUrlGr, description}]);
  }

  getBookByIdCASTAndParcial(bookId: number): Observable<Partial<Book | undefined>> {
    const bookfilded:  Partial<Book | undefined> = this.books?.find((b) => b.id === bookId);
    return of(bookfilded);
  }

  getBookByIdCast(bookId: number): Observable<Book> {
    const bookfilded: Book | undefined = this.books?.find((b) => b.id === bookId);
    return of(bookfilded) as Observable<Book>;

  }
}

