import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { BasicHighLightDirectiveComponent } from './basic-high-light-directive/basic-high-light-directive.component';
import { AdvanceDirectiveComponent } from './advance-directive/advance-directive.component';
import { RouterModule } from '@angular/router';
import { DirectiveDirective } from './directive.directive';
import { DirectiveBetterDirective } from './directive-better.directive';
import { AdvanceDirectiveWithHostlisternerDirective } from './advance-directive-with-hostlisterner.directive';
import { AdvanceDirectiveWithHostlisternerComponent } from './advance-directive-with-hostlisterner/advance-directive-with-hostlisterner.component';
import { AdvanceDirectiveWithHostlisternerAndHostBindingComponent } from './advance-directive-with-hostlisterner-and-host-binding/advance-directive-with-hostlisterner-and-host-binding.component';
import { AdvanceDirectiveWithHostlisternerAndHostbindingDirective } from './advance-directive-with-hostlisterner-and-hostbinding.directive';




@NgModule({
  declarations: [
    DirectiveComponent,
    BasicHighLightDirectiveComponent,
    AdvanceDirectiveComponent,
    DirectiveDirective,
    DirectiveBetterDirective,
    AdvanceDirectiveWithHostlisternerDirective,
    AdvanceDirectiveWithHostlisternerComponent,
    AdvanceDirectiveWithHostlisternerAndHostBindingComponent,
    AdvanceDirectiveWithHostlisternerAndHostbindingDirective,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '' ,component:DirectiveComponent},
      {path: 'basic' ,component:BasicHighLightDirectiveComponent},
      {path: 'advanced' ,component:AdvanceDirectiveComponent},
      {path: 'advancedWithHostiListener' ,component:AdvanceDirectiveWithHostlisternerComponent},
      {path: 'advancedWithHostiListenerAndHostBinding' ,component:AdvanceDirectiveWithHostlisternerAndHostBindingComponent},
    ])
  ]
})
export class DirectiveModule { }
