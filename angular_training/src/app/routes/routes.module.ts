import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { BasicsComponent } from './basics/basics.component';



@NgModule({
  declarations: [
    RoutesComponent,
    BasicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: RoutesComponent},
      {path: 'basic', component: BasicsComponent}
    ])
  ]
})
export class RoutesModule { }
