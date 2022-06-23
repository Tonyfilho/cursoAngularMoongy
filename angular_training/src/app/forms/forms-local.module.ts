import { FormsComponent } from './forms.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven/template-driven-forms/template-driven-forms.component';
import { TemplateDrivenValidatorsFormsBasicComponent } from './template-driven/template-driven-validators-forms-basic/template-driven-validators-forms-basic.component';
import { TemplateDrivenValidatorsLocalVariableComponent } from './template-driven/template-driven-validators-local-variable/template-driven-validators-local-variable.component';



@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenComponent,
    TemplateDrivenFormsComponent,
    TemplateDrivenValidatorsFormsBasicComponent,
    TemplateDrivenValidatorsLocalVariableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: FormsComponent},
      {path:'reactive', component: ReactiveFormsComponent},
      {path:'driven', component: TemplateDrivenComponent},
      {path:'driven/forms-basics', component: TemplateDrivenFormsComponent, },
      {path:'driven/validators-forms-basics', component: TemplateDrivenValidatorsFormsBasicComponent},
      {path:'driven/validators-forms-local-variable', component: TemplateDrivenValidatorsLocalVariableComponent},
      
    ])
  ]
})
export class FormsLocalModule { }
