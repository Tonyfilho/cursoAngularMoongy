import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestComponent } from './http-request.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HttpRequestComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'', component: HttpRequestComponent},
      {path:'post', component: PostComponent},
    ])
  ]
})
export class HttpResquestModule { }
