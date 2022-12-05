import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';



@NgModule({
  declarations: [
    PipesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:PipesComponent }
  ])
  ]
})
export class PipesModule { }
