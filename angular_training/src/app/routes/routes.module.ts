import { BasicsComponent } from './basics/basics.component';
import { DummyAdminGuardService } from './../_share/auth-guards/dummy-admin-guard.service';
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
import { ChildComponent } from './child-and-lazy-load/child.component';
import { NotFoundExempleComponent } from './not-found-exemple/not-found-exemple.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { DummyAuthGuard } from '../_share/auth-guards/dummy-auth-guard';




@NgModule({
  declarations: [
    RoutesComponent,
    ProgrammaticallyComponent,
    ParametersComponent,
    ParametersIdComponent,
    ParametersCardComponent,
    QueryParametersComponent,
    QueryParametersIdComponent,
    ChildComponent,
    NotFoundExempleComponent,
    CanActivateComponent,
    BasicsComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RoutesComponent },
      { path: 'prog', component: ProgrammaticallyComponent },
      { path: 'basic', component: BasicsComponent },
      { path: 'child', component: ChildComponent },
      { path: 'parameters', component: ParametersComponent },
      { path: 'canActivate-component', canActivate: [DummyAuthGuard], component: CanActivateComponent },
      { path: 'not-found', component: NotFoundExempleComponent },
      {
        path: 'parameters', component: ParametersComponent,  canActivateChild: [DummyAdminGuardService], children: [
          { path: 'parameters-card',component: ParametersCardComponent },
          { path: 'parameters-card/:id', component: ParametersIdComponent, },
        ]
      },

      /**  {path:'parameters/parameters-card/:id/:name', component: ParametersIdComponent},  /:NAME is just Exemple to get value by parameter*/
      { path: 'query-parameters', component: QueryParametersComponent },
      { path: 'query-parameters/:id/edit', component: QueryParametersIdComponent },

    ])
  ]
})
export class RoutesModule { }
