import { HttpClassService } from '../http-class.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myFormGroup!: FormGroup;

  constructor(private httpServer: HttpClassService) {
    this.myFormGroup = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      ssn: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }


  submitForms() {
    console.log("MyFormGroup: ", this.myFormGroup.value);
    this.httpServer.savePostUpdateId(this.myFormGroup.value).subscribe({
      next: (data) => { window.alert("Save with Sucess"),  console.log("sucess: ",data)},
      error: (e) => {window.alert("Ops something wrong.."), console.error("error",e)},
      complete: () =>{ console.info('complete and and Observable'), this.myFormGroup.reset()}
    })


  }
}


