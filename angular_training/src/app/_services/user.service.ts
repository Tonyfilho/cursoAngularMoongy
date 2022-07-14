import { AuthenticationService } from './authentication.service';
import { from , Observable, switchMap, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserProfile } from '@angular/fire/auth';
import { docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { IUserLocalProfile, UserLocalProfile } from '../_models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  /**Injetar uma instacia do Firebase DB */
  constructor(private firestore: Firestore, private auth: AuthenticationService) { }


  /**
   * * Criaremos o Get para popular os Dados na memoria, Exista ou Não Data
   * 1º usaremos o switchMap para darmos continuação ao Stream e pegará o User para GET
   * e colocaremos dentro da var USER
   * 2ª veremos Si esta ou autenticado e sem tem ou nãoUID, retornaremos o OF(null)
   * 3º caso Não seja false, pegaremos  uma REF do firestore e a list e o uid do user
   *4º retornar docData() q é um Observable q receberá um CAST de um Observable
    do IUserLocalProfile,d esta forma,  com o DocData() teremos o Realtime Update
    quando alterarmos os dados
   *
   */
  get currentUserProfile$():Observable<IUserLocalProfile | null> {
    return this.auth.currentUser$.pipe(
      switchMap(user => {
         if(!user?.uid) { return of(null)};
         const localRef = doc(this.firestore, 'users', user?.uid);
         return docData(localRef) as Observable<IUserLocalProfile> ;

      })
    )

  }


  /**
   *
   * @param param0
   * @returns
   *    *  * 1º adcionar um User,
   * 2º pegar uma REf do documento  para adcionar uma Func chamada  DOC do Angular fireStore
   * 3º Como paramentros:no Doc(****)  ** 1º Paramentro instacia do firestore
   * ** 2º Paramentro o Nome da nossa COLEÇÃO 'Nome_da_Coleção'
   * ** 3º o UID da colection
   * 4º FireStore tem 2 funções SetStore e o Upstore, usaremos o Setstore que é o create
   * 5º Usaremos o Set e converteremos a Promise em Observable e retornarmos
   */

  addUser({ user }: { user: UserLocalProfile; }): Observable<any> {
    const localRef = doc(this.firestore, 'users', user.Uid);
    return from(setDoc(localRef, user))

  }


/**
 *
 * @param param0
 * @returns
 * 1º updateDOc temos que passar TODO objeto user, para isso temos que usar ...SPREAD e mandar isto por Objeto
 */

    updateUser({ user }: { user: UserLocalProfile; }): Observable<any> {
      const localRef = doc(this.firestore, 'users', user.Uid);
      return from(updateDoc(localRef, {...user}))

    }

}
