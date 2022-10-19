import { BasicsModule } from './basics/basics.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { ProgrammaticallyComponent } from './programmatically/programmatically.component';



@NgModule({
  declarations: [
    RoutesComponent,
    ProgrammaticallyComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: RoutesComponent},
      {path:'prog', component: ProgrammaticallyComponent}
    ])
  ]
})
export class RoutesModule { }
