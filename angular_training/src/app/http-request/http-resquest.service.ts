import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IdataFireBase } from '../_share/_models/Idata-Firebase';

@Injectable({
  providedIn: 'root'
})
export class HttpResquestService {

  constructor(private http: HttpClient) {
    this.featchPost();
  }


  savePost(localForm: FormGroup) {
    return this.http.post<{ name: string }>(`https://angular-training-by-tony-filho-default-rtdb.europe-west1.firebasedatabase.app/posts.json`, localForm);
  }


  /**Usaremos para pegar o ID que o Firebase cria automaticamente,e salvaremos em um array,
   * 1º Lembrando que os dados no Firebase são Json Objeto, temos q usar um FORIN para pecorrer este Objeto.
   * 2º Por ser um Array d Objeto adcionaremos e usaremos o MAP
   * 3º Map aqui é para mudar o Objeto do Firebase e salvar o ID dentro do proprio objeto, mas agora com + 1 item
   * 4º Passar o no GET a formato get<{ [key: string]: IdataFireBase }>, isto é boa pratica
   * NOTE: Tipar o Data from firebase com
   *
    */
  featchPost() {
    return this.http.get<{ [key: string]: IdataFireBase }>(`https://angular-training-by-tony-filho-default-rtdb.europe-west1.firebasedatabase.app/posts.json`)
      // .pipe(
      //   map((responseData: any) => {
      //     const localData: IdataFireBase[] = [];

      //     for (const item in responseData) {
      //       if (responseData.hasOwnProperty(item)) {
      //         localData.push({ ...responseData[item], id: item,  });
      //       }
      //     }
      //     return localData;
      //   }
      //   ))
      .pipe(
        map((responseData) => {
          const localData: IdataFireBase[] = [];

          for (const item in responseData) {
            if (responseData.hasOwnProperty(item)) {
              localData.push({ ...responseData[item], id: item, });
            }
          }
          return localData;
        }
        ))
  }

  getAll() {
    return this.http.get(`https://angular-training-by-tony-filho-default-rtdb.europe-west1.firebasedatabase.app/posts.json`);
  }
}
