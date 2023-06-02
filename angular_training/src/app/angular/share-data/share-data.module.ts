import { RouterModule } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareDataComponent } from './share-data.component';
import { NgContentLocalComponent } from './ng-content-local/ng-content-local.component';
import { FormsModule } from '@angular/forms';

import { GamerFatherComponent } from './gamer-control-in-share-data/gamer-father.component';
import { CockPitComponent } from './input-output/cockpit/cockpit.component';
import { ServerElementComponent } from './input-output/server-element/server-element.component';
import { LocalReferencesComponent } from './local-references/local-references.component';
import { CockpitFromLocalComponent } from './local-references/cockpit-from-local/cockpit-from-local.component';
import { CockpitFromViewChildComponent } from './view-child/cockpit-from-view-child/cockpit-from-view-child.component';
import { OddComponent } from './gamer-control-in-share-data/odd/odd.component';
import { EvenComponent } from './gamer-control-in-share-data/even/even.component';
import { GamerControlComponent } from './gamer-control-in-share-data/gamer-control/gamer-control.component';
import { ShareByServiceComponent } from './share-by-service/share-by-service.component';






@NgModule({
  declarations: [
    InputOutputComponent,
    ViewChildComponent,
    ShareDataComponent,
    NgContentLocalComponent,
    CockPitComponent,
    ServerElementComponent,
    LocalReferencesComponent,
    CockpitFromLocalComponent,
    CockpitFromViewChildComponent,
    OddComponent,
    EvenComponent,
    GamerControlComponent,
    GamerFatherComponent,
    ShareByServiceComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'angular/shareData', component: ShareDataComponent },
      { path: 'angular/shareData/input&outPut', component: InputOutputComponent },
      { path: 'angular/shareData/viewChild', component: ViewChildComponent },
      { path: 'angular/shareData/ngContent', component: NgContentLocalComponent },
      { path: 'angular/shareData/localReference', component: LocalReferencesComponent },
      { path: 'angular/shareData/gamerControl' ,component:GamerFatherComponent},
      { path: 'angular/shareData/byService' ,component:ShareByServiceComponent}
    ])
  ]
})
export class ShareDataModule { }
