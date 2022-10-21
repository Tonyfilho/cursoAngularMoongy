import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { ProgrammaticallyComponent } from './programmatically/programmatically.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ParametersIdComponent } from './parameters/parameters-card/parans-id/parameters-id.component';
import { ParametersCardComponent } from './parameters/parameters-card/parameters-card.component';



@NgModule({
  declarations: [
    RoutesComponent,
    ProgrammaticallyComponent,
    ParametersComponent,
    ParametersIdComponent,
    ParametersCardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: RoutesComponent},
      {path:'prog', component: ProgrammaticallyComponent},
      {path:'parameters', component: ParametersComponent},
      {path:'parameters/card', component: ParametersCardComponent},
      {path:'parameters/card:/id', component: ParametersIdComponent},

    ])
  ]
})
export class RoutesModule { }
