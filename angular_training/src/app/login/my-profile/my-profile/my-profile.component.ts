import { UserLocalProfile } from '../../../_share/_models/user-profile.model';
import { UserService } from '../../../_share/_services/user.service';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { concatMap, Observable, take } from 'rxjs';
import { User } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/_share/_services/authentication.service';
import { Router } from '@angular/router';
import { UpLoadService } from 'src/app/_share/_services/up-load.service';
import { HotToastService } from '@ngneat/hot-toast';
import { IUserLocalProfile } from 'src/app/_share/_models/user-profile.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{

  myProfileForm!: UntypedFormGroup;
  user$: Observable<IUserLocalProfile | null>



  constructor(public auth: AuthenticationService,
    private router: Router, private upservice: UpLoadService, private tost: HotToastService, private userService: UserService) {
    this.user$ = userService.currentUserProfile$;


    this.myProfileForm = new UntypedFormGroup({
      uid: new UntypedFormControl(''),
      displayName: new UntypedFormControl(''),
      firstName: new UntypedFormControl(''),
      lastName: new UntypedFormControl(''),
      phone: new UntypedFormControl(''),
      address: new UntypedFormControl(''),
    });
  }

  ngOnInit(): void {
    /**Por termo um serviço de USer que é um Observable, precisamo atualizar o FORM local
     *  com os valores que vem do Firebase usanod PatchValue do FormBuilder
     * o Campo DisplayName já fica atualizado*/
    this.userService.currentUserProfile$.pipe(take(1)).subscribe(user => {
      this.myProfileForm.patchValue({...user}, )
    });


  }



  changePicture(event: any, user: IUserLocalProfile) {

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
    console.log(this.myProfileForm.value);
    const { displayName, firstName, lastName, phone, address } = this.myProfileForm.value;

    const user: UserLocalProfile = new UserLocalProfile(displayName, firstName, lastName, phone, address);
    this.userService.updateUser({ user }).pipe(
      this.tost.observe({
        success: 'My Profile is being uploaded',
        loading: 'Logging in ..',
        error: (err) => `There was erro in update Profile : ${err}`
      })).subscribe({
        next: () => { },
        error: (err) => console.error(err)
      })

  }
}
