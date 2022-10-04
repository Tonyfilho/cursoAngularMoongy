import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LifecycleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([])
  ]
})
export class LifecycleModule { }
