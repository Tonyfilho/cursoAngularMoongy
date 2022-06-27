import { debounceTime, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  name: FormControl = new FormControl();
  address: FormControl = new FormControl();
  email: FormControl = new FormControl();
  ssn: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }
  debouceTimeControl(form: FormControl): Observable<any> {
    console.log('FormControl: ', form);
    return form.valueChanges.pipe(debounceTime(1000));
  }

  submitForms() {
   this.debouceTimeControl(this.name);
   this.debouceTimeControl(this.address);
   this.debouceTimeControl(this.email);
   this.debouceTimeControl(this.ssn);
   return true;

  }
}
