import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { concatMap, Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { UpLoadService } from 'src/app/_services/up-load.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myProfileForm!: FormGroup
  name$: Observable<User | null>;

  constructor(public auth: AuthenticationService,
    private router: Router, private upservice: UpLoadService, private tost: HotToastService) {
    this.name$ = auth.currentUser$;
    this.myProfileForm = new FormGroup ({
        uid: new FormControl(''),
        displayName: new FormControl(''),
        fistName: new FormControl(''),
        lastName: new FormControl(''),
        phone: new FormControl(''),
        address: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }



  changePicture(event: any, user: User) {

    this.upservice.uploadImage(event.target?.files[0], `images/profiles/${user.uid}`).
      pipe(
        this.tost.observe({
          success: 'Image is being uploaded',
          loading: 'Logging in ..',
          error: (err) => `There was erro in uploading : ${err}`
        }),
        concatMap((photoURL) => this.auth.updateProfileData({ photoURL }))
      ).subscribe({
        next: () => { },
        error: err => { console.log('Error uploading: ', err) },
      })
  }

  submitProfile() {

  }
}
