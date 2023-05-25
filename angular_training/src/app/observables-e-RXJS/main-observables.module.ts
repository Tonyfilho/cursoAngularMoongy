import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainObservablesERXJSComponent } from './main-observables-e-rxjs.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { ContatStreamsComponent } from './contat-streams/contat-streams.component';
import { ExaustMapComponent } from './rxjs-operators/exaust-map/exaust-map.component';




@NgModule({
  declarations: [


    MainObservablesERXJSComponent,
      DragAndDropComponent,
      ContatStreamsComponent,
      ExaustMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: MainObservablesERXJSComponent},
      {path:'dragAndDrop', component: DragAndDropComponent},
      {path:'concatStreams', component: ContatStreamsComponent},
      {path:'exaustMap', component: ExaustMapComponent},
    ])
  ]
})
export class ObservablesModule { }
