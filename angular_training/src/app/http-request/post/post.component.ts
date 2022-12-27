import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myFormGroup!: FormGroup;

  constructor() {
    this.myFormGroup = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      ssn: new FormControl(''),
      passwordGroup: new FormGroup({
        password: new FormControl(''),
        pConfirm: new FormControl(''),
      })
    });
  }

  ngOnInit(): void {
  }


  submitForms() {
    const { name, address, email,ssn , passwordGroup : { password, pConfirm} } = this.myFormGroup.value;
    console.group();
    console.log('Destruiction',name, address, email, ssn , password, pConfirm);
    console.groupEnd();
    console.log("MyFormGroup: ", this.myFormGroup);


  }
}
