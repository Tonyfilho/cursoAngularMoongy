import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './basics/home/home.component';

import { RoutesComponent } from './routes.component';
import { ServersComponent } from './basics/servers/servers.component';
import { ViewAndEditServersComponent } from './basics/servers/view-and-edit-servers/view-and-edit-servers.component';
import { ServiceUsedToLoadUpdatesServersComponent } from './basics/servers/service-used-to-load-updates-servers/service-used-to-load-updates-servers.component';
import { UsersComponent } from './basics/users/users.component';
import { ViewUsersComponent } from './basics/users/view-users/view-users.component';
import { BasicsComponent } from './basics/basics.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServersComponent,
    ViewAndEditServersComponent,
    ServiceUsedToLoadUpdatesServersComponent,
    UsersComponent,
    ViewUsersComponent,
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
