import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';

import { ssnValidator, ssnValidatorFunc } from '../../../_share/_custom-validators/custons-validations';

@Component({
  selector: 'app-form-controls-basic-validators',
  templateUrl: './form-controls-basic-validators.component.html',
  styleUrls: ['./form-controls-basic-validators.component.css']
})
export class FormControlsBasicValidatorsComponent implements OnInit {

  myformBasicValidators!: UntypedFormGroup;
  emailRegex:RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  // ssnValidator = new ssnValidator();
  constructor(private fb: UntypedFormBuilder) {
    this.myformBasicValidators = fb.group({
          name: ['' , {validators: [Validators.required, Validators.minLength(3),Validators.maxLength(50)],  updateOn: 'blur'}],
          address:['', {validators: [Validators.required, Validators.minLength(3),Validators.maxLength(50)], updateOn: 'blur'}],
          email:['', {validators: [Validators.required, Validators.pattern(this.emailRegex)], updateOn: 'blur'}],
          /**Posso chamar o Static dentro da Classe, ou a função */
          // ssn:['', {validators: [Validators.required, ssnValidator.SSNVALIDATOR]}]
          ssn:['', {validators: [Validators.required, Validators.minLength(9), Validators.maxLength(9), ssnValidatorFunc]}]

    })
   }

  ngOnInit(): void {
  }
  debouceTimeControl(form: UntypedFormControl): Observable<any> {
    console.log('FormControl: ', form);
    return form.valueChanges.pipe(debounceTime(1000));
  }

  submitForms() {
    console.log('Form: ', this.myformBasicValidators );
    console.log('FormNameTouched: ', this.myformBasicValidators.controls['name'].touched );
    console.log('FormHasErrorMinLenghtName: ', this.myformBasicValidators.hasError('minlength', 'name') );
    console.log('FormHasErrorMinLenghtAdress: ', this.myformBasicValidators.hasError('minlength', 'address') );

  }

}
