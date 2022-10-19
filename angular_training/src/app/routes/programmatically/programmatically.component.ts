import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmatically',
  templateUrl: './programmatically.component.html',
  styleUrls: ['./programmatically.component.css'
  ]
})
export class ProgrammaticallyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToByRouter() {
    this.router.navigate(['routes']);
  }

}
