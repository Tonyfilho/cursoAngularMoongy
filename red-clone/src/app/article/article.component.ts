import { Component, HostBinding, Input, OnInit } from '@angular/core';

import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article!: Article; 
  constructor() {
   this.article = new Article('', '', 10);
  }

  ngOnInit(): void {}

  voteUp() {
    this.article.votes++;
  }
  voteDown() {
    this.article.votes--;
  }
}
