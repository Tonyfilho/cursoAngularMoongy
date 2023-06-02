import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareDataModule } from './share-data/share-data.module';
import { FormsLocalModule } from './forms/forms-local.module';
import { DirectiveModule } from './directives/directive.module';
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
    ShareDataModule,
    FormsLocalModule,
    RouterModule.forChild([
      {path: 'angular', component: AngularComponent},
      {path: 'directive', loadChildren: () => import('./directives/directive.module').then(module => module.DirectiveModule)},
      {path: 'forms', loadChildren: () => import('./forms/forms-local.module').then(module => module.FormsLocalModule)},
      // { path: 'shareData', loadChildren: () => import('').then(module => module.ShareDataModule)},
    ])
  ]
})
export class AngularModule { }
