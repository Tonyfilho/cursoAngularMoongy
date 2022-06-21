import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styles: [
  ]
})
export class FormBuilderComponent implements OnInit {

  myFormModel!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.myFormModel = fb.group({
      username: ['', Validators.required],
      ssn: {value: '12345', disabled: false},
      passwordsGroup: fb.group({
        password: '',
        pconfirm: '',
      })
    })
  }

  onSubmit(){
    console.log(this.myFormModel.value);
  }

  ngOnInit(): void {
  }

}
