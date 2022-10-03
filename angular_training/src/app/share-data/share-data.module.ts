import { RouterModule } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareDataComponent } from './share-data.component';
import { NgContentLocalComponent } from './ng-content-local/ng-content-local.component';
import { FormsModule } from '@angular/forms';
import { LocalInputComponent } from './input-output/local-input/local-input.component';
import { LocalOutputComponent } from './input-output/local-output/local-output.component';



@NgModule({
  declarations: [InputOutputComponent, ViewChildComponent, ShareDataComponent, NgContentLocalComponent, LocalInputComponent, LocalOutputComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShareDataComponent },
      { path: 'input&outPut', component: InputOutputComponent },
      { path: 'viewChild', component: ViewChildComponent },
      { path: 'ngContent', component: NgContentLocalComponent }
    ])
  ]
})
export class ShareDataModule { }
