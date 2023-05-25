import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fire-base-auth-api',
  templateUrl: './fire-base-auth-api.component.html',
  styleUrls: ['./fire-base-auth-api.component.css']
})
export class FireBaseAuthApiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  changeRouter() {
    this.router.navigateByUrl('/rxjs-observables/exaustMap');
  }
}
