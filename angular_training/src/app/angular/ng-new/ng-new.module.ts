import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgNewComponent } from './ng-new.component';
import { StartComponent } from './start/start.component';
import { InstallComponent } from './install/install.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NgNewComponent,
    StartComponent,
    InstallComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'angular/ngNew', component: NgNewComponent},
      {path: 'angular/ngNew/install', component: InstallComponent},
      {path: 'angular/ngNew/start', component: StartComponent},
    ])
  ]
})
export class NgNewModule { }
