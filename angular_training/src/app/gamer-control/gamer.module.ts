import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerComponent } from './gamer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OddComponent } from './gamer-father/odd/odd.component';
import { EvenComponent } from './gamer-father/even/even.component';
import { GamerControlComponent } from './gamer-father/gamer-control/gamer-control.component';
import { GamerFatherComponent } from './gamer-father/gamer-father.component';



@NgModule({
  declarations: [
    GamerComponent,
    OddComponent,
    EvenComponent,
    GamerControlComponent,
    GamerFatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '' ,component:GamerComponent},
      {path: 'gamerControl' ,component:GamerFatherComponent}
    ])
  ]
})
export class GamerModule { }
