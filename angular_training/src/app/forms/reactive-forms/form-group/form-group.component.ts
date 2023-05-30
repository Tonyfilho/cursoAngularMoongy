import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  myFormGroup!: UntypedFormGroup;

  constructor() {
    this.myFormGroup = new UntypedFormGroup({
      name: new UntypedFormControl(''),
      address: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      ssn: new UntypedFormControl(''),
      passwordGroup: new UntypedFormGroup({
        password: new UntypedFormControl(''),
        pConfirm: new UntypedFormControl(''),
      })
    });
  }

  ngOnInit(): void {
  }


  submitForms() {
    const { name, address, email,ssn , passwordGroup : { password, pConfirm} } = this.myFormGroup.value;
    console.group();
    console.log('Destruiction',name, address, email, ssn , password, pConfirm);
    console.groupEnd();
    console.log("MyFormGroup: ", this.myFormGroup);


  }
}
