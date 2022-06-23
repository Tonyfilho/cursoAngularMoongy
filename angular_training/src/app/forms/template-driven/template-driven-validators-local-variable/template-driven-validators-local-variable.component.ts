import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-validators-local-variable',
  templateUrl: './template-driven-validators-local-variable.component.html',
  styleUrls: ['./template-driven-validators-local-variable.component.css']
})
export class TemplateDrivenValidatorsLocalVariableComponent implements OnInit {

 
  localPattern =  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$';
  constructor() { }
  
  

  ngOnInit(): void {
  }
  submitForms(f: NgForm ) { 
    console.log('Objeto_de_Validator',f.errors );
    console.log('dirty',f.controls['nome'].dirty);
    console.log('pristine',f.controls['nome'].pristine);
    console.log('touched',f.controls['nome'].touched);
    console.log('hasError required',f.controls['nome'].hasError('required'));
    console.log('hasError minlength',f.controls['nome'].hasError('minlength'));
    console.log('hasError maxlength',f.controls['nome'].hasError('maxlength'));
    console.log('hasError pattern',f.controls['passwordGroup'].hasError('pattern'));
    console.log('hasError pattern getError',f.controls['passwordGroup'].get('password')?.hasError('pattern'));
    console.log('hasError pattern getError',f.controls['passwordGroup'].get('confirmPassword')?.hasError('pattern'));
    console.log(f);
    // f.reset();
    // this.hasError = !this.hasError;
  }
}
