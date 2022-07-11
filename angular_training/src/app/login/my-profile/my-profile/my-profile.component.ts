import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myProfileForm!: FormGroup
  name$: Observable<User | null>;

  constructor(public auth: AuthenticationService, private router: Router) {
    this.name$ = auth.currentUser$;
  }

  ngOnInit(): void {
  }

  submit() { }
}
