import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from './directives/directive.module';
import { RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';



@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    RouterModule.forChild([
      {path: 'angular', component: AngularComponent},
      {path: 'directive', loadChildren: () => import('./directives/directive.module').then(module => module.DirectiveModule)},
    ])
  ]
})
export class AngularModule { }
