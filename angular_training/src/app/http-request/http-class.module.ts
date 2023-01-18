import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClassComponent } from './http-class.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetComponent } from './get/get.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';



@NgModule({
  declarations: [
    HttpClassComponent,
    PostComponent,
    GetComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideDatabase(() => getDatabase()),
    RouterModule.forChild([
      {path:'', component: HttpClassComponent},
      {path:'post', component: PostComponent},
      {path:'getAll', component: GetComponent},
    ])
  ]
})
export class HttpResquestModule { }
