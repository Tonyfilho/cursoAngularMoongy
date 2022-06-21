import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-validators-forms-basic',
  templateUrl: './template-driven-validators-forms-basic.component.html',
  styleUrls: ['./template-driven-validators-forms-basic.component.css']
})
export class TemplateDrivenValidatorsFormsBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForms(f: NgForm ) {
    const {name, address, email, ssn, passwordGroup: {password, confirmPassword} } = f.value ;
    console.group();
    console.log('Destructions', name, address, email, ssn, password, confirmPassword);
    console.groupEnd();
    console.log('FORM',f);
    console.log(f.value);
    f.reset();
  }

}
