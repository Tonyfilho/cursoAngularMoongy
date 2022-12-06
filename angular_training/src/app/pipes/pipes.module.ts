import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesBasicComponent } from './pipes-basic/pipes-basic.component';



@NgModule({
  declarations: [
    PipesComponent,
    PipesBasicComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:PipesComponent },
      {path:'pipes-basics', component:PipesBasicComponent }
  ])
  ]
})
export class PipesModule { }
