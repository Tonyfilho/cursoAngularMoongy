import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <main style="text-align:center" class="content">
      <h1>
        Mediator Service
      </h1>
      <hr>
      <section class='mediator'>
        <app-search></app-search> (search component)
      </section>
      <nav>
        <a routerLink='/'>Ebay</a>
        <a routerLink='/amazon'>Amazon</a>
      </nav>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .mediator{
      background-color: lightGreen;
      padding: 15px;
    }

    nav {
      display: flex;
      justify-content: space-evenly;
      padding: 15px;
    }
  `]
})
export class AppComponent {

  constructor(){

    console.log('------------ Observable (cold) ---------');

    let random$ = new Observable( obs => obs.next(Math.random()));

    random$.subscribe( n => console.log('OBS1: ', n));
    random$.subscribe( n => console.log('OBS2: ', n));
    random$.subscribe( n => console.log('OBS3: ', n));


    console.log('--------------------');

    console.log('------------ BehaviorSubject() (HOT) ---------');

    let random2$ = new BehaviorSubject(0);
    random2$.next(Math.random());

    random2$.subscribe( n => console.log('BHS1: ', n));
    random2$.subscribe( n => console.log('BHS2: ', n));
    random2$.subscribe( n => console.log('BHS3: ', n));
    random2$.subscribe( n => console.log('BHS4: ', n));

    console.log('--------------------');


    console.log('------------ Subject()  ---------');
        let subject = new Subject();

        subject.next('a');
        subject.next('b');
        subject.subscribe( val => console.log('subscricao recebeu: ', val));
        subject.next('c');
        subject.next('d');
    console.log('--------------------');

    console.log('------------ BehaviorSubject()  ---------');
        let bSubject = new BehaviorSubject('a');

        bSubject.next('a');
        bSubject.next('b');
        bSubject.subscribe( val => console.log('subscricao recebeu: ', val));
        bSubject.next('c');
        bSubject.next('d');
    console.log('--------------------');

    }



}
