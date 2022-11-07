import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Para torna o CanDeactivate como serviço generico, temos q criar uma INTERFACE para ser implentada
 * por todos que precisarem do serviço
 */
 export interface ICanComponentLeave {
  canLeave: () => boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UnSaveChangesGuardsService  implements CanDeactivate<ICanComponentLeave>{

  constructor() { }
 /**
   *
   *implementaremos um serviço que caso algum formulario seja começado a ser preechido
    e o user for trocar de pagina ANTES de enviar o mesmo, aparecerá um modal de aviso
    para o user confirmar se quer sair da pagina.
    OBS: precisa por o canDeactivate: [UnSavedChangesGuard] lá na rota para funcionar
   */
  canDeactivate(component: ICanComponentLeave, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(component.canLeave) {
      return component.canLeave()
    }
     return true
  }


}
