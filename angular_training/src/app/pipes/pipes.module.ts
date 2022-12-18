import { ShortenPipe } from './pipe-shorten.pipe';
import { PipeFilterPipe } from './pipe-filter.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesBasicComponent } from './pipes-basic/pipes-basic.component';
import { PipesCustomsComponent } from './pipes-customs/pipes-customs.component';
import { PipesAdvancedComponent } from './pipes-advanced/pipes-advanced.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PipesComponent,
    PipesBasicComponent,
    PipesCustomsComponent,
    ShortenPipe,
    PipesAdvancedComponent,
    PipeFilterPipe

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'', component:PipesComponent },
      {path:'pipes-basics', component:PipesBasicComponent },
      {path:'pipes-customs', component:PipesCustomsComponent},
      {path:'pipes-customs-advanced', component:PipesAdvancedComponent}
  ])
  ]
})
export class PipesModule { }
