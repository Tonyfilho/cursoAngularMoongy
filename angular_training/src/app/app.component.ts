import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasLogin!: boolean | undefined ;
   constructor( public auth: AuthenticationService, private router: Router) {
    auth.currentUser$.subscribe(user => this.hasLogin = user?.emailVerified)
   }

   /**Em caso de deslocagar subscrevemos no metodo e redirecinaremos a rota */
   logOut() {
    this.auth.logout().subscribe(()=> {
      this.router.navigate(['/about']);
    });
   }
}
