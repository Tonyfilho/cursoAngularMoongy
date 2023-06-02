import { debounceTime, Observable } from 'rxjs';
import { UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  name: UntypedFormControl = new UntypedFormControl();
  address: UntypedFormControl = new UntypedFormControl();
  email: UntypedFormControl = new UntypedFormControl();
  ssn: UntypedFormControl = new UntypedFormControl();
  constructor() { }

  ngOnInit(): void {
  }
  debouceTimeControl(form: UntypedFormControl): Observable<any> {
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
