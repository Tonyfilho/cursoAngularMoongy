import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ssnValidator } from '../myValidatorsLib';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styles: [`
    .error{color:tomato}
    .social.ng-dirty.ng-invalid{background-color:pink}
  `]
})
export class CustomComponent implements OnInit {

  myFormModel!: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      segSocial: new FormControl('', ssnValidator)
    });
  }

  ngOnInit(): void {
  }

}
