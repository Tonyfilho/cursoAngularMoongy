import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './basics/home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ViewAndEditServersComponent } from './servers/view-and-edit-servers/view-and-edit-servers.component';
import { ServiceUsedToLoadUpdatesServersComponent } from './servers/service-used-to-load-updates-servers/service-used-to-load-updates-servers.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServersComponent,
    ViewAndEditServersComponent,
    ServiceUsedToLoadUpdatesServersComponent,
    UsersComponent,
    ViewUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
