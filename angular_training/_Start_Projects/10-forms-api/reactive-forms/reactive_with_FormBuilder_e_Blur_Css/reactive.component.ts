import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [`
  .error{color: red}
  `]
})
export class ReactiveComponent implements OnInit {

  myFormModel!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myFormModel = fb.group({
      phone: ['', {
        updateOn: 'blur',
        validators:[
          Validators.required,
          Validators.minLength(9),
          Validators.pattern('[0-9]*'),
      ]
      }]
    })
  }

  get phone(){
    return this.myFormModel.get('phone');
  }

  ngOnInit(): void {
  }

}
