import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

   loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      email: ['', {validators:[Validators.required, Validators.email], updateOn: 'blur'}],
      password: ['', { validators:[Validators.required, ], updateOn: 'blur'}]
    })
   }

   ngOnInit(): void {
     this.loginForm.controls['email'].getError('required');
     this.loginForm.controls['email'].dirty;
    }
    close(){
      this.router.navigateByUrl('/home');
    }
    ngOnDestroy(): void {
      this.close;
    }



}
