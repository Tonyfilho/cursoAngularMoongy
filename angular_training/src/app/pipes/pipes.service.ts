import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';


interface IServers {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PipesService {
  serverEventEmiter: EventEmitter<IServers[]> = new EventEmitter();
  serversDummy: IServers[]= [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  constructor() {
       /*******************Foi posto este SteInterval para evitar que EventEmitter retorne UNDEFINE */
    setInterval(() => this.serverEventEmiter.emit(this.serversDummy));
   }

  getServesDummy(): Observable<IServers[]> {
     return this.serverEventEmiter.asObservable();
    //  return of(this.serversDummy);
  }

  addNewServerDummy(server: IServers) {
    this.serversDummy.push(server);
  }


  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'text-bg-success': server.status === 'stable',
      'text-bg-warning': server.status === 'offline',
      'text-bg-danger': server.status === 'critical'
    };
  }
}
