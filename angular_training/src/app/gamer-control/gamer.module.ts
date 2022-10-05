import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerComponent } from './gamer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GamerControlComponent } from './gamer-control/gamer-control.component';



@NgModule({
  declarations: [
    GamerComponent,
    OddComponent,
    EvenComponent,
    GamerControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '' ,component:GamerComponent},
      {path: 'gamerControl' ,component:GamerControlComponent}
    ])
  ]
})
export class GamerModule { }
