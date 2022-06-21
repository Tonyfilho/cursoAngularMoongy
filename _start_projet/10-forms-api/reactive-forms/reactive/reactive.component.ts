import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [
  ]
})
export class ReactiveComponent implements OnInit {

  myFormModel!: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      username: new FormControl(''),
      ssn: new FormControl(''),
      passwordsGroup: new FormGroup({
        password: new FormControl(''),
        pconfirm: new FormControl(''),
      }),
    });
  }

  onSubmit(): void {
    const {username, ssn, passwordsGroup:{password, pconfirm}}= this.myFormModel.value;

    console.log(this.myFormModel);
    console.log(username);

    console.log('username:', this.myFormModel.controls['username'].value);
    console.log('ssn: ', this.myFormModel.get('ssn')?.value );



  }

  ngOnInit(): void {
  }

}
