import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/assets/class/Articles.modules';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input() article!: Article
  constructor() { }

  ngOnInit(): void {
  }

}
