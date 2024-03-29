
import { BehaviorSubject, Observable, map, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, } from '@angular/core';
import { Database, set, ref, update, onValue, remove } from '@angular/fire/database';
import { HiddenButton } from 'src/app/_share/_models/hidden-button';
import { IdataFireBase } from 'src/app/_share/_models/Idata-Firebase';

const FIREBASEREALTIME: string = `https://angular-training-by-tony-filho-default-rtdb.europe-west1.firebasedatabase.app/AngularTraning.json`;
@Injectable({
  providedIn: 'root'
})
export class HttpClassService {

  localError: BehaviorSubject<string> = new BehaviorSubject(''); //serve para criar um error quando clicar no endpoint /http-request/error


  serverEventEmiterHideButton: EventEmitter<Partial<HiddenButton>> = new EventEmitter();

  constructor(private http: HttpClient, private database: Database) {
    this.featchPost();

    /*******************Foi posto este SteInterval para evitar que EventEmitter retorne UNDEFINE */
   //setInterval(() =>  this.serverEventEmiterHideButton.emit( ));

  }


  savePost(localForm: IdataFireBase) {
    return this.http.post<{ name: string }>(this.localError.value + FIREBASEREALTIME, localForm ,
      {headers: new HttpHeaders({ 'Custom-Header' : 'This is my private Headers', error: 'This is my private errors'})})
      .pipe(map(data => { return { ...localForm, id: data.name } }));
  }

  /**Aqui misturamos HTTP Request com Usando POST e Operadores RXJS e o Metodo UPDATE
   * Pois desta forma consigo usar o Exemplo do verbos HTTP e salvar um ID ja no usuario.
   * 1º faz um Post vazio
   * 2º recupera o ID com Pipe e Map
   * 3ª usa metodo UPDATE e REF do Realtime Firebase.
   * 4º Uso o SPREAD para disolver o Objeto e depois adciono o Objeto do ID, tem q ser nesta ordem
   * senão o Spread sobre escreve o ID.
   * OBS: o MEtodo PUT do HTTP não funcionar com FIREBASE
   */
  savePostUpdateId(localForm: IdataFireBase) {
    return this.http.post<{ name: string }>(FIREBASEREALTIME, {headers: new HttpHeaders({ name: 'This is my private Headers', error: 'This is my private errors'})})
      .pipe(map(data => {
        update(ref(this.database, `AngularTraning/` + `${data.name}`), {
          ...localForm, id: data.name
        }); return console.log("Exemple Data in Realtime DataBase: ", { ...localForm, id: data.name })
      }));
  }


  /**Usaremos para pegar o ID que o Firebase cria automaticamente,e salvaremos em um array,
   * 1º Lembrando que os dados no Firebase são Json Objeto, temos q usar um FORIN para pecorrer este Objeto.
   * 2º Por ser um Array d Objeto adcionaremos e usaremos o MAP
   * 3º Map aqui é para mudar o Objeto do Firebase e salvar o ID dentro do proprio objeto, mas agora com + 1 item
   * 4º Passar o no GET a formato get<{ [key: string]: IdataFireBase }>, isto é boa pratica
   * NOTE: Tipar o Data from firebase com
   *
    */
  featchPost(): Observable<IdataFireBase[]> {
    return this.http.get<{ [key: string]: IdataFireBase }>(FIREBASEREALTIME, {headers: new HttpHeaders({ name: 'This is my private Headers', error: 'This is my private errors'})})
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
      /**Metodo TIPADO sem o ANY */
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

  getAll(): Observable<IdataFireBase[]> {
    const data: IdataFireBase[] = [];
    return this.http.get(FIREBASEREALTIME).pipe(map((localData: any) => {
      console.log("Before the Map and FOR IN transformation : ", localData);
      for (const key in localData) {
        if (localData.hasOwnProperty(key)) {
          data.push({ ...localData[key] })
        }
      }
      return data;
    })
    )
  }

  deleteItem(item: string) {
    console.log("dentro do service delete");
   remove(ref(this.database, `AngularTraning/` + `${item}`) );
 // this.http.delete(FIREBASEREALTIME + `/${item}`);
  }





}

