import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ParametersComponent } from './parameters/parameters.component';
import { RoutesComponent } from './routes.component';
import { QueryParametersComponent } from './query-parameters/query-parameters.component';
import { ProgrammaticallyComponent } from './programmatically/programmatically.component';
import { ParametersIdComponent } from './parameters/parameters-card/parans-id/parameters-id.component';
import { QueryParametersIdComponent } from './query-parameters/query-parameters-id/query-parameters-id.component';
import { ChildComponent } from './child-and-lazy-load/child.component';
import { NotFoundExempleComponent } from './not-found-exemple/not-found-exemple.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { BasicsComponent } from './basics/basics.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { LazyloadPreloadComponent } from './lazyload-preload/lazyload-preload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnSaveChangesGuardsService } from 'src/app/_share/auth-guards/unsave-changesguards.service';
import { DummyAuthGuard } from 'src/app/_share/auth-guards/dummy-auth-guard';
import { DummyAdminGuardService } from 'src/app/_share/auth-guards/dummy-admin-guard.service';
import { ParametersCardComponent } from './parameters/parameters-card/parameters-card.component';







@NgModule({
  declarations: [
    RoutesComponent,
    ProgrammaticallyComponent,
    ParametersComponent,
    ParametersIdComponent,
    ParametersCardComponent,
    ParametersComponent,
    QueryParametersComponent,
    QueryParametersIdComponent,
    ChildComponent,
    NotFoundExempleComponent,
    CanActivateComponent,
    BasicsComponent,
    CanDeactivateComponent,
    LazyloadPreloadComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: RoutesComponent },
      { path: 'prog', component: ProgrammaticallyComponent },
      { path: 'basic', component: BasicsComponent },
      { path: 'child', component: ChildComponent },
      { path: 'preLoad', component: LazyloadPreloadComponent },
      { path: 'canDeactivate-component', component: CanDeactivateComponent, canDeactivate: [UnSaveChangesGuardsService]},

      { path: 'parameters', component: ParametersComponent },
      { path: 'canActivate-component', canActivate: [DummyAuthGuard], component: CanActivateComponent },
      { path: 'not-found', component: NotFoundExempleComponent },
      {
        path: 'parameters', component: ParametersComponent,  canActivateChild: [DummyAdminGuardService], children: [
          { path: 'parameters-card', component: ParametersCardComponent },
          { path: 'parameters-card/:id', component: ParametersIdComponent, },
        ]
      },

      /**  {path:'parameters/parameters-card/:id/:name', component: ParametersIdComponent},  /:NAME is just Exemple to get value by parameter*/
      { path: 'query-parameters', component: QueryParametersComponent },
      { path: 'query-parameters/:id/edit', component: QueryParametersIdComponent },

    ])
  ]
})
export class RoutesLocalModule { }
