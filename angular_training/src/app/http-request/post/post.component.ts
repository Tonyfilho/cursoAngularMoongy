import { HttpResquestService } from './../http-resquest.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myFormGroup!: FormGroup;

  constructor(private httpServer: HttpResquestService) {
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
    console.log("MyFormGroup: ", this.myFormGroup);
    this.httpServer.savePost(this.myFormGroup.value).subscribe({
      next: (data) => console.log("sucess: ",data),
      error: (e) => console.error("error",e),
      complete: () => console.info('complete and and Observable')
    })


  }
}


