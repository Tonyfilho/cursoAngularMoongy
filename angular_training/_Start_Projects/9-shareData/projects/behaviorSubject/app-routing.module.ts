import { AmazonComponent } from './amazon/amazon.component';
import { EbayComponent } from './ebay/ebay.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EbayComponent},
  {path: 'amazon', component: AmazonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
