import { FormsComponent } from './forms.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven/template-driven-forms/template-driven-forms.component';



@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: FormsComponent},
      {path:'reactive', component: ReactiveFormsComponent},
      {path:'driven', component: TemplateDrivenComponent},
      {path:'driven/template-driven-forms-basics', component: TemplateDrivenFormsComponent},
      {path:'driven/template-driven-validators-forms-basics', component: TemplateDrivenFormsComponent},
      
    ])
  ]
})
export class FormsLocalModule { }
