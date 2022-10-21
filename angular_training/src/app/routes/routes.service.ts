import { from, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../_models/book.model';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  books:Book[] = [];

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
    let bookfilded: Book | undefined = this.books?.find((b) => b.id === bookId);
    return of(bookfilded);

  }

}
