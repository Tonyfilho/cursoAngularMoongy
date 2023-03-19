import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainObservablesERXJSComponent } from './main-observables-e-rxjs.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { ContatStreamsComponent } from './contat-streams/contat-streams.component';




@NgModule({
  declarations: [


    MainObservablesERXJSComponent,
      DragAndDropComponent,
      ContatStreamsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: MainObservablesERXJSComponent},
      {path:'dragAndDrop', component: DragAndDropComponent},
      {path:'concatStreams', component: ContatStreamsComponent},
    ])
  ]
})
export class ObservablesModule { }
