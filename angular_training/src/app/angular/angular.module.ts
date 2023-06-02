import { FormsLocalModule } from './forms/forms-local.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from './directives/directive.module';
import { RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    AngularComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    FormsLocalModule,
    RouterModule.forChild([
      {path: 'angular', component: AngularComponent},
      {path: 'directive', loadChildren: () => import('./directives/directive.module').then(module => module.DirectiveModule)},
      {path: 'forms', loadChildren: () => import('./forms/forms-local.module').then(module => module.FormsLocalModule)},
    ])
  ]
})
export class AngularModule { }
