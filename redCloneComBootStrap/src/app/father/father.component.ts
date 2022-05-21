import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Article } from 'src/assets/class/Articles.modules';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements OnInit, AfterViewInit {
  article!: Article[];
  constructor() {
    this.article = [
      new Article('Angular', 'https://angular.io', 50),
      new Article('View', 'http://view.io', 10),
      new Article('React', 'http://react.io', 30),
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.addArticles;
  }
  addArticles(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.article.push(new Article(title.value, link.value, 1));
    title.value = '';
    link.value = '';
    return false;
  }

  sortArticle(): Article[] {
    //ordena o maior pelo menor, usando o Votes como numero
    return this.article.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
