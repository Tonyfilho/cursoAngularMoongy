import { FormsComponent } from './forms.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven/template-driven-forms/template-driven-forms.component';
import { TemplateDrivenValidatorsFormsBasicComponent } from './template-driven/template-driven-validators-forms-basic/template-driven-validators-forms-basic.component';
import { TemplateDrivenValidatorsLocalVariableComponent } from './template-driven/template-driven-validators-local-variable/template-driven-validators-local-variable.component';
import { FormControlComponent } from './reactive-forms/form-control/form-control.component';



@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenComponent,
    TemplateDrivenFormsComponent,
    TemplateDrivenValidatorsFormsBasicComponent,
    TemplateDrivenValidatorsLocalVariableComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: FormsComponent},
      {path:'reactive', component: ReactiveFormsComponent},
      {path:'reactive/formsControl', component: FormControlComponent},
      {path:'reactive/formsGroup', component: FormControlComponent},
      {path:'reactive/formsBuilder', component: FormControlComponent},
      {path:'reactive/formsArray', component: FormControlComponent},
      {path:'reactive/formsUpdate', component: FormControlComponent},
      {path:'reactive/formsBasicValidators', component: FormControlComponent},
      {path:'reactive/formsValitatosBlurCss', component: FormControlComponent},
      {path:'reactive/formsCustons', component: FormControlComponent},
      {path:'driven', component: TemplateDrivenComponent},
      {path:'driven/forms-basics', component: TemplateDrivenFormsComponent },
      {path:'driven/validators-forms-basics', component: TemplateDrivenValidatorsFormsBasicComponent},
      {path:'driven/validators-forms-local-variable', component: TemplateDrivenValidatorsLocalVariableComponent},

    ])
  ]
})
export class FormsLocalModule { }
