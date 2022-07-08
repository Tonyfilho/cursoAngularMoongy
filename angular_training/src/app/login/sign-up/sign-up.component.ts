import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { custonPatternPassword } from 'src/app/_custom-validators/custons-validations';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sigUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService, private tost:  HotToastService) {
    this.sigUpForm = fb.group({
      nome: ['', {validators: [Validators.required,Validators.minLength(3)], updateOn: 'blur'}],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      passwordGroup : fb.group({
         password: ['', [Validators.required]],
         pConfirm: ['',  [Validators.required]], updateOn: 'blur',
      },{validators: [custonPatternPassword, ]})
    })
  }

  ngOnInit(): void {
  this.passwordGroup.dirty
  this.passwordGroup.get('password')?.getError('custonPatternPassword');
  }
  /**Get do PasswordGroup */
  get passwordGroup():FormGroup {
    return this.sigUpForm.controls['passwordGroup'] as FormGroup;
  }



  close() {
    this.router.navigateByUrl('/home');
  }


  ngOnDestroy(): void {
    this.close;
  }

  /**1º Ver se  o form é INvalido, caso seja ja retornar */
  submit() {
    this.passwordGroup;
    this.passwordGroup.dirty;
    this.passwordGroup.get('password')?.getError('custonPatternPassword');

  //   if (!this.sigUpForm.valid) {
  //     return;
  //   }


  //   const { email, password } = this.sigUpForm.value
  //  this.auth.login(email, password).pipe(
  //   this.tost.observe({
  //     success: 'Logged in Sucessfully',
  //     loading: 'Logging in ..',
  //     error: 'There was as error'
  //   })
  //  ).subscribe({
  //   next: () => {this.router.navigate(['/home'])},
  //   error: () => {this.resertForm}

  //   })
  }

   get resertForm() {
    return this.sigUpForm.reset();
   }

}
