import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  myFormBuilder!: FormGroup;

  constructor(private fb: FormBuilder) {
    /**Ja na criação fo FormBuilder, posso passar um array, um objeto e setar um valor default,
     *  passar um null, posso setar o evento de blur ou onchange do mouse */
    this.myFormBuilder = fb.group({
      name: [''],
      address: [''],
      email: [''],
      ssn: { value: '111222', disabled: true },
      passwordGroup: fb.group({
        password: '',
        pConfirm: [''],
      })
    });
  }

  ngOnInit(): void {
  }


  submitForms() {
    const { name, address, email, ssn, passwordGroup: { password, pConfirm } } = this.myFormBuilder.value;
    console.group();
    console.log('Destruiction', name, address, email, ssn, password, pConfirm);
    console.groupEnd();
    console.log("myFormBuilder: ", this.myFormBuilder);


  }
}
