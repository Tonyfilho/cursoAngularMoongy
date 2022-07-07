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

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService, private tost:  HotToastService) {
    this.loginForm = fb.group({
      nome: ['', {validators: [Validators.required,Validators.minLength(3)], updateOn: 'blur'}],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      passwordGroup : fb.group({
         password: ['', [Validators.required]],
         pConfirm: ['',  [Validators.required]], updateOn: 'blur', validators: [custonPatternPassword, ],
      })



    })
  }

  ngOnInit(): void {
    this.loginForm.controls['email'].getError('required');
    this.loginForm.controls['email'].dirty;
  }
  close() {
    this.router.navigateByUrl('/home');
  }
  ngOnDestroy(): void {
    this.close;
  }

  /**1º Ver se  o form é INvalido, caso seja ja retornar */
  submit() {
    if (!this.loginForm.valid) {
      return;
    }


    const { email, password } = this.loginForm.value
   this.auth.login(email, password).pipe(
    this.tost.observe({
      success: 'Logged in Sucessfully',
      loading: 'Logging in ..',
      error: 'There was as error'
    })
   ).subscribe({
    next: () => {this.router.navigate(['/home'])},
    error: () => {this.resertForm}

    })
  }

   get resertForm() {
    return this.loginForm.reset();
   }

}
