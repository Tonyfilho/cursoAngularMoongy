import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

import { Book } from '../../../../../_share/_models/book.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutesService } from '../../../routes.service';

@Component({
  selector: 'app-parameters-id',
  templateUrl: './parameters-id.component.html',
  styleUrls: ['./parameters-id.component.css']
})
export class ParametersIdComponent implements OnInit, OnDestroy {
  book?: Observable<Book | undefined>;
  localId: number | any  = 0;
  localName?: string;
  paramsSubscription!: Subscription;


  constructor(private routesService:RoutesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    /**Or  Using SnapShot*/
    this.localId = this.route.snapshot.params['id'];
    this.localName = this.route.snapshot.params['name'];
    /**Using Observable */
   this.paramsSubscription = this.route.params.subscribe((data: Params) =>  {this.localId = data["id"]} );

   this.book = this.routesService.getBookById(parseInt(this.localId));

  }
/** With Routes I dont need to Unsubscribe, because Angular already do for Us, but in any other  Exemple you MUST use that approach the exeption is Piper Async */
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();

  }

}
