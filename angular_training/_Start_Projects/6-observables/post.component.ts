
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClassService } from 'src/app/http-request/http-class.service';

@Component({
  selector: 'app-post',
  templateUrl: '/src/app/http-request/post/post.component.html',
  styleUrls: ['/src/app/http-request/post/post.component.css']
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
    console.log("MyFormGroup: ", this.myFormGroup);
    this.httpServer.savePost(this.myFormGroup.value).subscribe({
      next: (data) => console.log("sucess: ",data),
      error: (e) => console.error("error",e),
      complete: () => console.info('complete and and Observable')
    })


  }
}


