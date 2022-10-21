export class Book {
    constructor(
      public id: number,
      public title: string,
      public author:string,
      public alreadyRead: boolean,
      public imageUrl: string,
      public imageUrlGr: string,
      public description: string) {
    }
  }
