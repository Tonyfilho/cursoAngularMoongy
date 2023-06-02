import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  myFormArray!: UntypedFormGroup;
  // emailArray! : FormArray [];

  constructor(private fb: UntypedFormBuilder) {
    /**Ja na criação fo FormBuilder, posso passar um array, um objeto e setar um valor default,
     *  passar um null, posso setar o evento de blur ou onchange do mouse */
    this.myFormArray = fb.group({
      name: [''],
      address: [''],
      email: [''],
      emails: fb.array([]),
      ssn: { value: '111222', disabled: true },
      passwordGroup: fb.group({
        password: '',
        pConfirm: [''],
      })
    });
  }

  ngOnInit(): void {
  }
  addEmail() {
   this.emails.push(new UntypedFormControl(''));
  }
  get emails(): UntypedFormArray {
    return this.myFormArray.get('emails') as UntypedFormArray;
  }

  submitForms() {
    const { name, address, email, ssn, passwordGroup: { password, pConfirm } } = this.myFormArray.value;
    console.group();
    console.log('Destruiction', name, address, email, ssn, password, pConfirm);
    console.groupEnd();
    console.log("myFormArray: ", this.myFormArray.get('emails')?.value);
    console.log("myFormArray: ", this.myFormArray.controls['emails'].get([0]));


  }

}
