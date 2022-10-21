import { BasicsModule } from './basics/basics.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { ProgrammaticallyComponent } from './programmatically/programmatically.component';
import { ParansComponent } from './parans/parans.component';
import { ParansIdComponent } from './parans/parans-id/parans-id.component';



@NgModule({
  declarations: [
    RoutesComponent,
    ProgrammaticallyComponent,
    ParansComponent,
    ParansIdComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: RoutesComponent},
      {path:'prog', component: ProgrammaticallyComponent},
      {path:'parans', component: ProgrammaticallyComponent},
      {path:'prog', component: ProgrammaticallyComponent},

    ])
  ]
})
export class RoutesModule { }
