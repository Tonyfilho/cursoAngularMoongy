import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareDataModule } from './share-data/share-data.module';
import { FormsLocalModule } from './forms/forms-local.module';
import { DirectiveModule } from './directives/directive.module';
import { AngularComponent } from './angular.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpResquestLocalModule } from './http-request/http-class.module';
import { PipesModule } from './pipes/pipes.module';





@NgModule({
  declarations: [
    AngularComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpResquestLocalModule,
    DirectiveModule,
    ShareDataModule,
    FormsLocalModule,
    PipesModule,




    RouterModule.forChild([
      { path: 'angular', component: AngularComponent },
      { path: 'directive', loadChildren: () => import('./directives/directive.module').then(module => module.DirectiveModule) },
      { path: 'forms', loadChildren: () => import('./forms/forms-local.module').then(module => module.FormsLocalModule) },
      { path: 'shareData', loadChildren: () => import('./share-data/share-data.module').then(module => module.ShareDataModule) },
      { path: 'http-request', loadChildren: () => import('./http-request/http-class.module').then(module => module.HttpResquestLocalModule) },
      { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then(module => module.PipesModule) },
    ])
  ]
})
export class AngularLocalModule { }
