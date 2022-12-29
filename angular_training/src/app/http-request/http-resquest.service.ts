import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpResquestService {

  constructor(private http: HttpClient) { }


  savePost(localForm: any) {
   return this.http.post(`https://angular-training-by-tony-filho-default-rtdb.europe-west1.firebasedatabase.app/posts.json`, localForm);
  }
}
