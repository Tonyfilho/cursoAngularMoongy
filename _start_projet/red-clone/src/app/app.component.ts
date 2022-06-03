import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  article: Article[] = [];

  constructor(){
    this.article = [
      new Article('Angular', "https://angular.io", 0),
      new Article('View', "https://angular.io", 10),
      new Article('JS', "https://angular.io", 30),
    ]

  }

  addAryticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`foi adcionado : ${title.value}, e com  link ${link.value}`);

    this.article.push(new Article(title.value, link.value,2));
    title.value = '';
    link.value = '';

    return false;

  }

  sortedArticles():Article[] {
    return this.article.sort((a: Article, b: Article) => b.votes - a.votes); 
  }

}
