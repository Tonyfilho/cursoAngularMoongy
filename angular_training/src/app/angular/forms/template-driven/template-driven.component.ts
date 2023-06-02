import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  forms: string = 'Template Drives Forms Examples';
  constructor() { }

  ngOnInit(): void {
  }
  submitForms(f: NgForm) {
    console.log(f)
  }
}
