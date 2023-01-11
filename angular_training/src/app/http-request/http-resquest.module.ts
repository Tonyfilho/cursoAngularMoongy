import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestComponent } from './http-request.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetComponent } from './get/get.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';



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
    provideDatabase(() => getDatabase()),
    RouterModule.forChild([
      {path:'', component: HttpRequestComponent},
      {path:'post', component: PostComponent},
      {path:'getAll', component: GetComponent},
    ])
  ]
})
export class HttpResquestModule { }
