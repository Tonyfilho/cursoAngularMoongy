import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private stateSubject: BehaviorSubject<string> = new BehaviorSubject('');

  searchCriteria(value: string){
    this.stateSubject.next(value);
  }

  getState(): Observable<string>{
    return this.stateSubject.asObservable();
  }


  constructor() { }
}
