import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestComponent } from './http-request.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetComponent } from './get/get.component';



@NgModule({
  declarations: [
    HttpRequestComponent,
    PostComponent,
    GetComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'', component: HttpRequestComponent},
      {path:'post', component: PostComponent},
    ])
  ]
})
export class HttpResquestModule { }
