import { FormsComponent } from './forms.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';



@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FormsComponent},
      {path:'reactive', component: ReactiveFormsComponent},
      {path:'driven', component: TemplateDrivenFormsComponent},
      
    ])
  ]
})
export class FormsModule { }
