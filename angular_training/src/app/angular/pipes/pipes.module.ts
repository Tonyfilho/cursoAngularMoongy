import { ShortenPipe } from './pipe-shorten.pipe';
import { PipeFilterPipe } from './pipe-filter.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';

import { FormsModule } from '@angular/forms';
import { PipeReversePipe } from './pipe-reverse.pipe';
import { PipeSortByPipe } from './pipe-sort-by.pipe';
import { PipesBasicComponent } from './pipes-basic/pipes-basic.component';
import { PipesCustomsComponent } from './pipes-customs/pipes-customs.component';
import { PipesAdvancedComponent } from './pipes-advanced/pipes-advanced.component';
import { PipeSortByComponent } from './pipe-sort-by/pipe-sort-by.component';
import { PipeReverseComponent } from './pipe-reverse/pipe-reverse.component';




@NgModule({
  declarations: [
    PipesComponent,
    PipesBasicComponent,
    PipesCustomsComponent,
    ShortenPipe,
    PipesAdvancedComponent,
    PipeFilterPipe,
    PipeReversePipe,
    PipeSortByPipe,
    PipeSortByComponent,
    PipeReverseComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'angular/pipes', component:PipesComponent },
      {path:'angular/pipes/pipes-basics', component:PipesBasicComponent },
      {path:'angular/pipes/pipes-customs', component:PipesCustomsComponent},
      {path:'angular/pipes/pipes-customs-advanced', component:PipesAdvancedComponent},
      {path:'angular/pipes/pipes-customs-sort', component:PipeSortByComponent},
      {path:'angular/pipes/pipes-customs-reverse', component:PipeReverseComponent},
  ])
  ]
})
export class PipesModule { }
