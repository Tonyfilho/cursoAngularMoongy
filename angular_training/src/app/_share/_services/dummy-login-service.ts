import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DummyLoginService {

  /**
    * Se está ou não logado
    */
  private userLogged = new BehaviorSubject<boolean>(false);
  serviceLoggedRetorno = this.userLogged.asObservable();

  /**
   * Se é ou não administrador
   */
  userAdmin: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.isLogged(true); //passando se estou ou não logado, como se estivesse vindo do backend
    this.userAdmin.emit(false);; //passando se é ou não admin, como se estivesse vindo do backend
  }



  isLogged(localLogged: boolean) {
    this.userLogged.next(localLogged)
  }

  isAdmin() {
    this.userAdmin.emit(true);
  }
}
