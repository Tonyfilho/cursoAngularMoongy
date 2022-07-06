import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
 /**1º Injetar o firebase Auth
  * 2ºUsar o SignInWithEmailAndPassword do firebase Auth
  */
  constructor(private auth: Auth) {

   }

   /**Login method for Firebase, que retornará uma promise e transformaremos em um Observable*/
   login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password)) ;
   }

   logout() {
    return from(this.auth.signOut()) ;
   }
}//end class
