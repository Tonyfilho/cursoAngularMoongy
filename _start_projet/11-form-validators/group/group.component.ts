import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { equalValidator, ssnValidator } from '../myValidatorsLib';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styles: [`
    .error{color: red}
  `]
})
export class GroupComponent implements OnInit {

  myFormModel!:FormGroup

  constructor(private fb:FormBuilder) {
    this.myFormModel = fb.group({
      username: ['', Validators.required],
      ssn: ['', ssnValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validators: equalValidator})
    })
  }

  onSubmit(){
    console.log(this.myFormModel.value);
  }

  ngOnInit(): void {
  }

}
