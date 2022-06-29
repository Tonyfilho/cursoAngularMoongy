import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';

import { ssnValidator, ssnValidatorFunc } from './../../../../assets/classes/custom-validators/custons-validations';

@Component({
  selector: 'app-form-controls-basic-validators',
  templateUrl: './form-controls-basic-validators.component.html',
  styleUrls: ['./form-controls-basic-validators.component.css']
})
export class FormControlsBasicValidatorsComponent implements OnInit {

  myformBasicValidators!: FormGroup;
  emailRegex:RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  constructor(private fb: FormBuilder) {
    this.myformBasicValidators = fb.group({
          name: ['' , {validators: [Validators.required, Validators.minLength(3),Validators.maxLength(50)],  updateOn: 'blur'}],
          address:['', Validators.required, Validators.minLength(3),Validators.maxLength(50)],
          email:['', {validators: [Validators.required, Validators.email, Validators.pattern(this.emailRegex)], updateOn: 'blur'}],
          ssn:['', {validators: [Validators.required, ssnValidatorFunc]}]
    })
   }

  ngOnInit(): void {
  }
  debouceTimeControl(form: FormControl): Observable<any> {
    console.log('FormControl: ', form);
    return form.valueChanges.pipe(debounceTime(1000));
  }

  submitForms() {
   

  }

}
