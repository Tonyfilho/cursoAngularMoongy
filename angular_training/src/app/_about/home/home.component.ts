import { AuthenticationService } from '../../_share/_services/authentication.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  UserLogin$: Observable<User | null>;
  constructor(public auth: AuthenticationService) {
    this.UserLogin$ = auth.currentUser$;

   }

   ngOnInit(): void {
  //    this.UserLogin$.subscribe(user =>
  //     {
  //       console.log('Nome: ',user?.displayName)
  //       console.log('EmailVerified: ',user?.email)
  //     })
    }

}
