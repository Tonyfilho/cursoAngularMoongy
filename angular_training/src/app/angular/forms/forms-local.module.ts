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
import { FormGroupComponent } from './reactive-forms/form-group/form-group.component';
import { FormBuilderComponent } from './reactive-forms/form-builder/form-builder.component';
import { FormArrayComponent } from './reactive-forms/form-array/form-array.component';
import { UpdateFormComponent } from './reactive-forms/update-form/update-form.component';
import { FormControlsBasicValidatorsComponent } from './reactive-forms/form-controls-basic-validators/form-controls-basic-validators.component';
import { FormControlsCustonsValidatorsComponent } from './reactive-forms/form-controls-custons-validators/form-controls-custons-validators.component';
import { GetBasicValidatorsComponent } from './reactive-forms/get-basic-validators/get-basic-validators.component';





@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenComponent,
    TemplateDrivenFormsComponent,
    TemplateDrivenValidatorsFormsBasicComponent,
    TemplateDrivenValidatorsLocalVariableComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
    FormArrayComponent,
    UpdateFormComponent,
    FormControlsBasicValidatorsComponent,
    FormControlsCustonsValidatorsComponent,
    GetBasicValidatorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'angular/forms', component: FormsComponent},
      {path:'angular/forms/reactive', component: ReactiveFormsComponent},
      {path:'angular/forms/reactive/formsControl', component: FormControlComponent},
      {path:'angular/forms/reactive/formsGroup', component: FormGroupComponent},
      {path:'angular/forms/reactive/formsBuilder', component: FormBuilderComponent},
      {path:'angular/forms/reactive/formsArray', component: FormArrayComponent},
      {path:'angular/forms/reactive/formsUpdate', component: UpdateFormComponent},
      {path:'angular/forms/reactive/formsBasicValidators', component: FormControlsBasicValidatorsComponent},
      {path:'angular/forms/reactive/formsCustons', component: FormControlsCustonsValidatorsComponent},
      {path:'angular/forms/reactive/get-basic-validation', component: GetBasicValidatorsComponent},
      {path:'angular/forms/driven', component: TemplateDrivenComponent},
      {path:'angular/forms/driven/forms-basics', component: TemplateDrivenFormsComponent },
      {path:'angular/forms/driven/validators-forms-basics', component: TemplateDrivenValidatorsFormsBasicComponent},
      {path:'angular/forms/driven/validators-forms-local-variable', component: TemplateDrivenValidatorsLocalVariableComponent},


    ])
  ]
})
export class FormsLocalModule { }
