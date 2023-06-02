import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HttpClassComponent } from './http-class.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { DeleteComponent } from './delete/delete.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ErroHandlingHttpComponent } from './erro-handling-http/erro-handling-http.component';

import { RouterModule } from '@angular/router';
import { getDatabase, provideDatabase } from '@angular/fire/database';






@NgModule({
  declarations: [
    HttpClassComponent,
    PostComponent,
    GetComponent,
    DeleteComponent,
    ErrorHandlingComponent,
    ErroHandlingHttpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    provideDatabase(() => getDatabase()),
    RouterModule.forChild([
      { path: 'angular/http-request', component: HttpClassComponent },
      { path: 'angular/http-request/post', component: PostComponent },
      { path: 'angular/http-request/getAll', component: GetComponent },
      { path: 'angular/http-request/delete', component: DeleteComponent },
      { path: 'angular/http-request/error', component: ErrorHandlingComponent },
      { path: 'angular/http-request/error-http-request', component: ErroHandlingHttpComponent },
    ])
  ]
})
export class HttpResquestLocalModule { }
