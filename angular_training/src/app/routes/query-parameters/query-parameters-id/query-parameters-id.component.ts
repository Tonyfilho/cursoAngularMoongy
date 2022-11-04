import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/_share/_models/book.model';
import { RoutesService } from '../../routes.service';

@Component({
  selector: 'app-query-parameters-id',
  templateUrl: './query-parameters-id.component.html',
  styleUrls: ['./query-parameters-id.component.css']
})
export class QueryParametersIdComponent implements OnInit {
  book?: Observable<Book | undefined>;
  localId: number | any  = 0;
  localName?: string;
  varQueryParameters: Object = {}; //Dummy Var
  varFragments: any = {}; //Dummy Var

  constructor(private routesService:RoutesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    /**Using Observable */
    this.route.params.subscribe((data: Params) =>  {this.localId = data["id"]} );
    this.book = this.routesService.getBookById(parseInt(this.localId));

   /**There are 2 ways to get QueryParamenters and Fragments, the best Aproach is Observable, always: */
   /**1º Using SnapShot, just will render in the same time of the template */
   this.varQueryParameters = this.route.snapshot.queryParams;
   this.varFragments = this.route.snapshot.fragment;

  console.log("VarQueryParameters with SnapShot: ", this.varQueryParameters);
  console.log("VarFragments with SnapShot: ", this.varFragments);

  /**2º Using Observable, It always rendering after the template redered  */
  this.route.queryParams.subscribe((data:Params) =>{ this.varQueryParameters = data,  console.log("VarQueryParameters with Observable: ", this.varQueryParameters)});
  this.route.fragment.subscribe((data: any) => {this.varFragments = data, console.log("VarFragments with Observable: ", this.varFragments)})


  ;

  }
}
