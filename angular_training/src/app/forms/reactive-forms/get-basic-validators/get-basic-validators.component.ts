import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { custonPatternPassword, equalPasswordValidator, ssnValidatorFunc } from 'src/assets/classes/custom-validators/custons-validations';

@Component({
  selector: 'app-get-basic-validators',
  templateUrl: './get-basic-validators.component.html',
  styleUrls: ['./get-basic-validators.component.css']
})
export class GetBasicValidatorsComponent implements OnInit {

  myGetForm!: FormGroup;
  emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  // ssnValidator = new ssnValidator();
  constructor(private fb: FormBuilder) {
    this.myGetForm = fb.group({
      name: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], updateOn: 'blur' }],
      address: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], updateOn: 'blur' }],
      email: ['', { validators: [Validators.required, Validators.pattern(this.emailRegex)], updateOn: 'blur' }],
      ssn: ['', { validators: [Validators.required, ssnValidatorFunc] }],
      passwordGroup: fb.group({
        password: ['', [Validators.required]],
        pConfirm: ['',[ Validators.required]], updateOn: 'blur'
      }, { validators: [ equalPasswordValidator, custonPatternPassword] })
    })
  }

  ngOnInit(): void {
  }



  get name(): FormGroup {

    return this.myGetForm.get('name') as FormGroup;
  }
  get address():FormGroup {
    return this.myGetForm.get('address') as FormGroup
  }
  get email():FormGroup {
    return this.myGetForm.get('email') as FormGroup
  }
  get ssn():FormGroup {
    return this.myGetForm.get('ssn') as FormGroup
  }
  get passwordGroup():FormGroup {
    return this.myGetForm.get('passwordGroup') as FormGroup
  }

  submitForms() {
    console.log('Form: ', this.myGetForm);
    console.log('FormNameTouched: ', this.myGetForm.controls['name'].touched);
    console.log('FormHasErrorMinLenghtName: ', this.myGetForm.hasError('required', 'name'));
    console.log('Name Erros: ',   this.name['errors']);
    console.log('Name GetError: ',   this.name.getError('required'));
    console.log('Name HasError: ',   this.name.hasError('minlength'));
    console.log('PasswordGroup GetError: ',   this.passwordGroup.getError('passwordPattern'));
    console.log('PasswordGroup HAsError: ',   this.passwordGroup.hasError('equalPassword'));
    console.log('PasswordGroup: ',   this.passwordGroup.get('password')?.getError('required'));


  }
}
