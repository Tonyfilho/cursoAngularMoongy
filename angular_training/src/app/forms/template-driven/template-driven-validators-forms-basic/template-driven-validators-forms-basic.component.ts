import { Component, OnChanges, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-validators-forms-basic',
  templateUrl: './template-driven-validators-forms-basic.component.html',
  styleUrls: ['./template-driven-validators-forms-basic.component.css']
})
export class TemplateDrivenValidatorsFormsBasicComponent implements OnInit, AfterViewInit {
  hasError!: boolean;
  localPattern =  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$';
  constructor() { }
  ngAfterViewInit(): void {
  
  }
  

  ngOnInit(): void {
  }
  submitForms(f: NgForm ) {
    /**Aqui são as 3 formas de buscar o OBJETO Required dentro f.controls['nome']?.errors
     * 1º atribuindo para var this.hasErrorNome = f.controls['nome'].errors?.['required'];
     * 2º criando uma var que é um Objeto e atribuindo valor requiredSemDestruition = f?.controls['nome']?.errors as any 
     * Obs: Temos q converter para ANY usando As ANY.
     * 3º usando o destruinction const  { required } = f.controls['nome'].errors as any
     * Obs: Temos q converter para ANY usando As ANY.
    */
    this.hasError = f.errors as any;
    const {nome, address, email, ssn, passwordGroup: {password, confirmPassword} } = f.value ;
    const  requiredSemDestruition: any = (f?.controls['nome']?.errors as any) === null ? false : true;
    const  { required  }: any = (f.controls['nome']?.errors as any ) === null || undefined ? false : true ;
    console.log('Destructions', nome, address, email, ssn, password, confirmPassword, required );
    
    console.log('required', requiredSemDestruition['required'] );
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
