import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { BasicHighLightDirectiveComponent } from './basic-high-light-directive/basic-high-light-directive.component';
import { AdvanceDirectiveComponent } from './advance-directive/advance-directive.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DirectiveComponent,
    BasicHighLightDirectiveComponent,
    AdvanceDirectiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '' ,component:DirectiveComponent},
      {path: 'directive/basic' ,component:BasicHighLightDirectiveComponent},
      {path: 'directive/advanced' ,component:AdvanceDirectiveComponent}
    ])
  ]
})
export class DirectiveModule { }
