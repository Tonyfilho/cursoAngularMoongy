import { ICanComponentLeave } from './../../_share/auth-guards/un-save-changes-guards.service';
import { Component, HostListener, OnInit } from '@angular/core';

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
   if(this.onClick.caller){
    return window.confirm(`You have some unsaved changes. Are you sure you want to leave`);
   }
    return true;
  }
}
