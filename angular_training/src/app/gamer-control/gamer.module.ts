import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerComponent } from './gamer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OddComponent } from './odd/odd.component';



@NgModule({
  declarations: [
    GamerComponent,
    OddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '' ,component:GamerComponent},
      {path: 'gamerControl' ,component:OddComponent}
    ])
  ]
})
export class GamerModule { }
