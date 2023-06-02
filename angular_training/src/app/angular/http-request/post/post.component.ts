
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { HttpClassService } from '../http-class.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myFormGroup!: UntypedFormGroup;

  constructor(private httpServer: HttpClassService) {
    this.myFormGroup = new UntypedFormGroup({
      name: new UntypedFormControl(''),
      address: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      ssn: new UntypedFormControl(''),
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


