import { AngularComponent } from './../angular.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { BasicHighLightDirectiveComponent } from './basic-high-light-directive/basic-high-light-directive.component';
import { AdvanceDirectiveComponent } from './advance-directive/advance-directive.component';
import { RouterModule } from '@angular/router';
import { DirectiveBasic } from './directive-basic.directive';
import { DirectiveBetterDirective } from './directive-better.directive';
import { AdvanceDirectiveWithHostlisternerDirective } from './advance-directive-with-hostlisterner.directive';
import { AdvanceDirectiveWithHostlisternerComponent } from './advance-directive-with-hostlisterner/advance-directive-with-hostlisterner.component';
import { AdvanceDirectiveWithHostlisternerAndHostBindingComponent } from './advance-directive-with-hostlisterner-and-host-binding/advance-directive-with-hostlisterner-and-host-binding.component';
import { AdvanceDirectiveWithHostlisternerAndHostbindingDirective } from './advance-directive-with-hostlisterner-and-hostbinding.directive';
import { CustomsColorsDirective } from './customs-colors.directive';
import { CustomsColorsComponent } from './customs-colors/customs-colors.component';
import { DropdownDirective } from './directive-dropdown.directive';
import { DirectiveDropdownAdvancedDirective } from './directive-dropdown-advanced.directive';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';




@NgModule({
  declarations: [
    DirectiveComponent,
    BasicHighLightDirectiveComponent,
    AdvanceDirectiveComponent,
    DirectiveBasic,
    DirectiveBetterDirective,
    AdvanceDirectiveWithHostlisternerDirective,
    AdvanceDirectiveWithHostlisternerComponent,
    AdvanceDirectiveWithHostlisternerAndHostBindingComponent,
    AdvanceDirectiveWithHostlisternerAndHostbindingDirective,
    CustomsColorsDirective,
    CustomsColorsComponent,
    DropdownDirective,
    DirectiveDropdownAdvancedDirective,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'angular/directive' ,component:DirectiveComponent},
      {path: 'basic' ,component:BasicHighLightDirectiveComponent},
      {path: 'advanced' ,component:AdvanceDirectiveComponent},
      {path: 'advancedWithHostiListener' ,component:AdvanceDirectiveWithHostlisternerComponent},
      {path: 'advancedWithHostiListenerAndHostBinding' ,component:AdvanceDirectiveWithHostlisternerAndHostBindingComponent},
      {path: 'customsColors' ,component:CustomsColorsComponent},

    ])
  ]
})
export class DirectiveModule { }
