import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formaData: any): void {
    //const {username, ssn, passwordsGroup:{pwd, pconfirm}} = formaData;

    //console.log("Password:", pwd);

    console.log(formaData);


  }

}
