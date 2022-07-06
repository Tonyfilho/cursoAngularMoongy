import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UserLogin$: Observable<User | null>;
  constructor(public auth: AuthenticationService) {
    this.UserLogin$ = auth.currentUser$;
   }

  ngOnInit(): void {
  }

}
