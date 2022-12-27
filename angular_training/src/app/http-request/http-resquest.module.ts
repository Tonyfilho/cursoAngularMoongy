import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestComponent } from './http-request.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    HttpRequestComponent,
    PostComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HttpResquestAndObservablesModule { }
