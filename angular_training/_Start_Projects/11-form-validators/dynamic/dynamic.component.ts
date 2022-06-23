import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [`
  .error{color: tomato}
  `]
})
export class DynamicComponent implements OnInit {

  myFormModel!: FormGroup;
  countryCtrl!: FormControl;
  phoneCtrl!: FormControl;

  constructor(private fb: FormBuilder) {
    this.myFormModel = fb.group({
      country: [''],
      phone: [''],
    })
  }


  ngOnInit(): void {
    this.countryCtrl = this.myFormModel.get('country') as FormControl;
    this.phoneCtrl = this.myFormModel.get('phone') as FormControl;

    this.countryCtrl.valueChanges.subscribe(country => {
      if(country === 'USA'){
        this.phoneCtrl.setValidators([Validators.minLength(6)]);
      } else {
        this.phoneCtrl.setValidators([Validators.minLength(10)]);
      }

      this.phoneCtrl.updateValueAndValidity();
    });
  }
}
