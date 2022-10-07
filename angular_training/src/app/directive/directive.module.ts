import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { BasicHighLightDirectiveComponent } from './basic-high-light-directive/basic-high-light-directive.component';
import { AdvanceDirectiveComponent } from './advance-directive/advance-directive.component';
import { RouterModule } from '@angular/router';
import { DirectiveDirective } from './directive.directive';
import { DirectiveBetterDirective } from './directive-better.directive';



@NgModule({
  declarations: [
    DirectiveComponent,
    BasicHighLightDirectiveComponent,
    AdvanceDirectiveComponent,
    DirectiveDirective,
    DirectiveBetterDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '' ,component:DirectiveComponent},
      {path: 'basic' ,component:BasicHighLightDirectiveComponent},
      {path: 'advanced' ,component:AdvanceDirectiveComponent}
    ])
  ]
})
export class DirectiveModule { }
