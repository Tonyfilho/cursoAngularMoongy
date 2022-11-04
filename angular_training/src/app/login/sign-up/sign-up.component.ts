import { switchMap } from 'rxjs';
import { UserService } from '../../_share/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { custonPatternPassword, passwordsMarchValidator } from 'src/app/_share/_custom-validators/custons-validations';
import { AuthenticationService } from 'src/app/_share/_services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sigUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService, private tost: HotToastService, public userService: UserService) {
    this.sigUpForm = fb.group({
      nome: ['', { validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur' }],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      passwordGroup: fb.group({
        password: ['', [Validators.required]],
        pConfirm: ['', [Validators.required]], updateOn: 'blur',
      }, { validators: [custonPatternPassword, passwordsMarchValidator()] })
    })
  }

  ngOnInit(): void {
    this.passwordGroup.dirty
    this.passwordGroup.get('password')?.getError('custonPatternPassword');
  }
  /**Get do PasswordGroup */
  get passwordGroup(): FormGroup {
    return this.sigUpForm.controls['passwordGroup'] as FormGroup;
  }



  close() {
    this.router.navigateByUrl('/about');
  }


  ngOnDestroy(): void {
    this.close;
  }

  /**1º Ver se  o form é INvalido, caso seja ja retornar */
  submit() {
    console.log('PasswordGroup', this.passwordGroup);
    console.log('PasswordGroup Dirty', this.passwordGroup.dirty);
    console.log('PasswordGroup.get(password)', this.passwordGroup.get('password')?.getError('custonPatternPassword'));



    if (!this.sigUpForm.valid) {
      return;
    }


    const { nome, email, passwordGroup: { password } } = this.sigUpForm.value
    this.auth.signUp(email, password).pipe(
      switchMap(({user: {uid}}) => this.userService.addUser({ uid, email, displayName: nome })), // fui mudado o SignUp para usar UserService
      this.tost.observe({
        success: 'Logged in Sucessfully',
        loading: 'Logging in ..',
        error: (err) => `erro Message ${err}`
      })
    ).subscribe({
      next: () => { this.router.navigate(['/home']) },
      error: () => { this.resertForm }

    })
  }

  get resertForm() {
    return this.sigUpForm.reset();
  }

}
