import { BasicsModule } from './basics/basics.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';



@NgModule({
  declarations: [
    RoutesComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: RoutesComponent},
    ])
  ]
})
export class RoutesModule { }
