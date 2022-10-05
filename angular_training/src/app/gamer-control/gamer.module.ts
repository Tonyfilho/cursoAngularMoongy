import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerComponent } from './gamer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OnInitAndOnChangedComponent } from './on-init-and-on-changed/on-init-and-on-changed.component';



@NgModule({
  declarations: [
    GamerComponent,
    OnInitAndOnChangedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '' ,component:GamerComponent},
      {path: 'gamerControl' ,component:OnInitAndOnChangedComponent}
    ])
  ]
})
export class GamerModule { }
