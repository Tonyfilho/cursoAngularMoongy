import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { custonPatternPassword, equalPasswordValidator, ssnValidatorFunc } from 'src/app/_share/_custom-validators/custons-validations';

@Component({
  selector: 'app-form-controls-custons-validators',
  templateUrl: './form-controls-custons-validators.component.html',
  styleUrls: ['./form-controls-custons-validators.component.css']
})
export class FormControlsCustonsValidatorsComponent implements OnInit {

  myFormCustons!: UntypedFormGroup;
  emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  // ssnValidator = new ssnValidator();
  constructor(private fb: UntypedFormBuilder) {
    this.myFormCustons = fb.group({
      name: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], updateOn: 'blur' }],
      address: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], updateOn: 'blur' }],
      email: ['', { validators: [Validators.required, Validators.pattern(this.emailRegex)], updateOn: 'blur' }],
      ssn: ['', { validators: [Validators.required, Validators.minLength(9), Validators.maxLength(9), ssnValidatorFunc] }],
      passwordGroup: fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        pConfirm: ['', [Validators.required, Validators.minLength(4)]], updateOn: 'blur'
      }, { validators: [equalPasswordValidator, custonPatternPassword] })
    })
  }

  ngOnInit(): void {
  }
  debouceTimeControl(form: UntypedFormControl): Observable<any> {
    console.log('FormControl: ', form);
    return form.valueChanges.pipe(debounceTime(1000));
  }

  submitForms() {
    console.log('Form: ', this.myFormCustons);
    console.log('FormNameTouched: ', this.myFormCustons.controls['name'].touched);
    console.log('FormHasErrorMinLenghtName: ', this.myFormCustons.hasError('minlength', 'name'));
    console.log('FormHasErrorMinLenghtAdress: ', this.myFormCustons.hasError('minlength', 'address'));

  }


}
