import { from, Observable, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { uploadBytes } from '@firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class UpLoadService {
  /**Injetar o fireBase Store aqui para fz o upload  */
  constructor(private storage: Storage) {

   }

   /**metodo the uploda,
    * 1º o File
    * 2º o Path
    * 3º retornar um observable
    * 4º pegar uma referencia do serviço no fireStorage
    * 5º Usar uploadBytes() do serviço fireStorage e converter em
    * um Observable.
    * 6º switchMap e passar p GetDownloasURL e e passamos o ref
    *
    */
   uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    );

   }
}
