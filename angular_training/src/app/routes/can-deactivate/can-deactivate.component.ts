import { ICanComponentLeave } from '../../_share/auth-guards/unsave-changesguards.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.css']
})
export class CanDeactivateComponent implements OnInit, ICanComponentLeave {

  @HostListener('click', ['$event.target'])
  onClick(btn: any): any {
    console.log('button', btn, 'number of clicks:');
  }
  myDeactivate!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.myDeactivate = fb.group({
      name: [''],
      address: [''],
    });
  }

  ngOnInit(): void {
  }

  canLeave():boolean {
   if(this.myDeactivate.dirty || this.myDeactivate.touched){
    return window.confirm(`You have some unsaved changes. Are you sure you want to leave`);
   }
    return true;
  }

  submitForms() {
   /**Apenas um Dummy para botão */
  }
}
