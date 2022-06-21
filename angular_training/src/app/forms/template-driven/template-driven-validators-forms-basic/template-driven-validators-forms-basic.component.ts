import { Component, OnChanges, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-validators-forms-basic',
  templateUrl: './template-driven-validators-forms-basic.component.html',
  styleUrls: ['./template-driven-validators-forms-basic.component.css']
})
export class TemplateDrivenValidatorsFormsBasicComponent implements OnInit, AfterViewInit {
  hasErrorNome!: boolean;
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
    this.hasErrorNome = f.controls['nome'].errors?.['required'];
    const {name, address, email, ssn, passwordGroup: {password, confirmPassword} } = f.value ;
    const  requiredSemDestruition = f?.controls['nome']?.errors as any;
    const  { required } = f.controls['nome'].errors as any ;
    console.log('Destructions', name, address, email, ssn, password, confirmPassword, required );
    console.groupEnd();
    console.log('required', requiredSemDestruition['required'], this.hasErrorNome);
    console.log('Objeto_de_Validator',f.controls['nome']?.errors );
    console.log('dirty',f.controls['nome'].dirty);
    console.log('pristine',f.controls['nome'].pristine);
    console.log(f.value);
    f.reset();
  }

}
