import { ICanComponentLeave } from './../../_share/auth-guards/un-save-changes-guards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.css']
})
export class CanDeactivateComponent implements OnInit, ICanComponentLeave {

  constructor() { }

  ngOnInit(): void {
  }

  canLeave():boolean {
   /**Precisa passar a logica de quando entrar no template ele acionar o candeateave */
   /**
    *  if(this.userFormBuilder.dirty) {
      return window.confirm(`You have some unsaved changes. Are you sure you want to leave`);
    }
    */
    return true;
  }
}
