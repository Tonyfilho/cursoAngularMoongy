import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainObservablesERXJSComponent } from './main-observables-e-rxjs.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';




@NgModule({
  declarations: [


    MainObservablesERXJSComponent,
      DragAndDropComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: MainObservablesERXJSComponent},
      {path:'dragAndDrop', component: DragAndDropComponent},
    ])
  ]
})
export class ObservablesModule { }
