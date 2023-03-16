import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesERXJSComponent } from './observables-e-rxjs.component';




@NgModule({
  declarations: [


    ObservablesERXJSComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: ObservablesERXJSComponent}
    ])
  ]
})
export class ObservablesModule { }
