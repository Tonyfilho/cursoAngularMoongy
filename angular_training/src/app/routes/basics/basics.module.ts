import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ViewAndEditServersComponent } from './servers/view-and-edit-servers/view-and-edit-servers.component';
import { ServiceUsedToLoadUpdatesServersComponent } from './servers/service-used-to-load-updates-servers/service-used-to-load-updates-servers.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =  [
  {path:'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    HomeComponent,
    ServersComponent,
    ViewAndEditServersComponent,
    ServiceUsedToLoadUpdatesServersComponent,
    UsersComponent,
    ViewUsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class BasicsModule { }
