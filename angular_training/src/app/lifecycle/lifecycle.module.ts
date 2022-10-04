import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OnInitAndOnChangedComponent } from './on-init-and-on-changed/on-init-and-on-changed.component';



@NgModule({
  declarations: [
    LifecycleComponent,
    OnInitAndOnChangedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '' ,component:LifecycleComponent},
      {path: 'onInitOnChange' ,component:OnInitAndOnChangedComponent}
    ])
  ]
})
export class LifecycleModule { }
