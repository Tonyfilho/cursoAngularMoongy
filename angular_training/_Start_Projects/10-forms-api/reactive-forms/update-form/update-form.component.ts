
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styles: [
  ]
})
export class UpdateFormComponent implements OnInit {

  myFormModel!:FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      id: new FormControl(''),
      description: new FormControl(''),
      seller: new FormControl(''),
    });
  }

  updateEntireForm(){
    this.myFormModel.setValue({
      id: 123,
      description: "um produto qualquer",
      seller: "Empresa XPTO",
    })
  }

  updatePartOfForm(){
    this.myFormModel.patchValue({
      description: "Produto Alterado",
    })
  }

  ngOnInit(): void {
  }

}
