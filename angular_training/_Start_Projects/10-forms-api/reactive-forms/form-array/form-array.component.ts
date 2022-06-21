import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styles: [
  ]
})
export class FormArrayComponent implements OnInit {

  formModel!: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      emails: new FormArray([
        new FormControl(''),
      ]),
    });
  }
  onSubmit(): void {
    console.log(this.formModel.value);
  }

  addEmail(){
    this.emails.push(new FormControl(''));
  }


  get emails(): FormArray{
    return this.formModel.get('emails') as FormArray;
  }

  ngOnInit(): void {
  }

}
