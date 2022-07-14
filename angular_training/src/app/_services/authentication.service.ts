import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, UserInfo } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from, switchMap, Observable, of, concatMap } from 'rxjs';
import { UpLoadService } from './up-load.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);
  /**1º Injetar o firebase Auth
   * 2ºUsar o SignInWithEmailAndPassword do firebase Auth,
   * 3º o authState() é um Obsevable é do firebase q controla se estamos ou não logados
   * com isto podemos dar ou bloquear acessos.
   */
  constructor(private auth: Auth, private uploadFile: UpLoadService) {

  }

  /**
   *Login method for Firebase, que retornará uma promise e transformaremos em um Observable
   * @param username
   * @param password
   * @returns
   */
  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password)) ;
  }
 /**
  *Logout desloga do firebase
  * @returns
  */
  logout() {
    return from(this.auth.signOut()) ;
  }

/**
 * Cria um usuario no firebase autenticator
 * Obs: Receberemos uma Promisse e reornaremos um Observable
 * @param nome
 * @param email
 * @param password
 * Para adicionar outra carateristica no cadastro, temos que o switchmap, pois
 * o metodo createUserWithEmailAndPassword só aceita 3 paramentros, e com o switchmap temos acesso
 * ao recursos disponiveis. Indo para UpdateProfile
 */
  signUp(nome: any, email: any, password: any) {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
    .pipe(switchMap(({user}) => updateProfile(user, { displayName: nome }))) ;
  }





/**
 *
 * @param param0 Partial é um SuperSet do UserInfo q conteim informações
 * sobre o usuario do fireStorage
 * 1º Pegar o user atual.
 * 2º Retornar um Of() e usar o concatMap para juntar os dados
 * 3º no concatmap validar se existe ou não um user
 */
  updateProfileData(profileData: Partial<UserInfo>) : Observable<any> {
   const userAtual = this.auth.currentUser;
   return of(userAtual).pipe(concatMap(user => {
    if(!user) { throw new Error('User Not Authenticated')}
    return updateProfile(user, profileData)
   }
   ))

  }






  
}//end class
