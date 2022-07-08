import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService, private tost:  HotToastService) {
    this.loginForm = fb.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required,], updateOn: 'blur' }]
    })
  }

  ngOnInit(): void {
    // this.loginForm.controls['email'].getError('required');
    // this.loginForm.controls['email'].dirty;
  }
  close() {
    this.router.navigateByUrl('/home');
  }
  ngOnDestroy(): void {
    this.close;
  }

  /**1º Ver se  o form é INvalido, caso seja ja retornar */
  /**Useo Controls.value ou Destrution, q é a boa pratica
   Ex: this.auth.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value) ; */
   /**
    * 2º caso haja login com next seremos redirecionado para homePage

    const { email, password } = this.loginForm.value
    this.auth.login(email, password).subscribe({
      next: val => { console.log(val.user.displayName), this.router.navigate(['/home']) },
      error: err => { console.log('Something was wrong!!!: ', err), this.router.navigate(['/login']) },
      complete: () => console.log("Closed Conection")

    });*/

    /** usar o HotToastService para termos um tost sem precisar usar Modais */
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
