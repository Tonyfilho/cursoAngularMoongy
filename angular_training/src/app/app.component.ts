import { IUserLocalProfile } from './_models/user-profile.model';
import { UserService } from './_services/user.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   user$: Observable<IUserLocalProfile | null>;
   constructor( public auth: AuthenticationService, private router: Router, private userService: UserService) {

    this.user$ = userService.currentUserProfile$;
   }

   /**Em caso de deslocagar subscrevemos no metodo e redirecinaremos a rota */
   logOut() {
    this.auth.logout().subscribe(()=> {
      this.router.navigate(['/about']);
    });
   }
}
