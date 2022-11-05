import { DummyLoginService } from './../_services/dummy-login-service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyAdminGuardService implements CanActivate, CanActivateChild  {
 private logged: boolean = false;
  constructor(private dummyLoginservice: DummyLoginService, private router: Router) {
    this.dummyLoginservice.userAdmin.subscribe((isAdmin: boolean) => {this.logged = isAdmin, console.log("isAdmin: "),this.logged});
   }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   /**Eu posso retornar um canActivate e usar tanto nas rotas Pais o canAtivate e nas rotas filhas o canActivateChild */
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.logged) {
      return true
    }
    return this.router.navigate(['/about']);

  }


}
