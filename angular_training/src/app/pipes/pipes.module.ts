import { ShortenPipe } from './pipes-customs/shorten-pipes.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesBasicComponent } from './pipes-basic/pipes-basic.component';
import { PipesCustomsComponent } from './pipes-customs/pipes-customs.component';



@NgModule({
  declarations: [
    PipesComponent,
    PipesBasicComponent,
    PipesCustomsComponent,
    ShortenPipe

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:PipesComponent },
      {path:'pipes-basics', component:PipesBasicComponent },
      {path:'pipes-customs', component:PipesCustomsComponent}
  ])
  ]
})
export class PipesModule { }
