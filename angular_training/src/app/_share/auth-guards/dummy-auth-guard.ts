import { DummyLoginService } from '../_services/dummy-login-service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class DummyAuthGuard implements CanActivate {


  logged: boolean = false;
  constructor(private dummyLoginService: DummyLoginService, private router: Router) {
    this.dummyLoginService.serviceLoggedRetorno.subscribe(isLoggin => this.logged = isLoggin)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.logged) {
      return true
    }
    return this.router.navigate(['/home']);

  }




}
