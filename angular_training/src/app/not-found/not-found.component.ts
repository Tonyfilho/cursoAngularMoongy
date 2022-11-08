import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
 message: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    /**Buscando DATA da rota not-found com a propriedade DATA */
    this.route.data.subscribe((data: Data )=> this.message = data['message']);
  }

}
