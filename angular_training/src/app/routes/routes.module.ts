import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { ProgrammaticallyComponent } from './programmatically/programmatically.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ParametersIdComponent } from './parameters/parameters-card/parans-id/parameters-id.component';
import { ParametersCardComponent } from './parameters/parameters-card/parameters-card.component';
import { QueryParametersComponent } from './query-parameters/query-parameters.component';
import { QueryParametersIdComponent } from './query-parameters/query-parameters-id/query-parameters-id.component';



@NgModule({
  declarations: [
    RoutesComponent,
    ProgrammaticallyComponent,
    ParametersComponent,
    ParametersIdComponent,
    ParametersCardComponent,
    QueryParametersComponent,
    QueryParametersIdComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: RoutesComponent},
      {path:'prog', component: ProgrammaticallyComponent},
      {path:'parameters', component: ParametersComponent},
      {path:'parameters/parameters-card', component: ParametersCardComponent},
      {path:'parameters/parameters-card/:id', component: ParametersIdComponent},
      /**  {path:'parameters/parameters-card/:id/:name', component: ParametersIdComponent},  /:NAME is just Exemple to get value by parameter*/
      {path:'query-parameters', component: QueryParametersComponent},
      {path:'query-parameters/:id/edit', component: QueryParametersIdComponent},

    ])
  ]
})
export class RoutesModule { }
