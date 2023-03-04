import { Subscription } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { HttpClassService } from '../http-class.service';



@Component({
  selector: 'app-error-hangling',
  templateUrl: './error-handling.component.html',
   styleUrls: ['../post/post.component.css']
})
export class ErrorHandlingComponent implements OnInit, OnDestroy{

  myFormGroup!: FormGroup;
  displayStyle = "none";
  localError!: {status: string, statusText: string, name: string};
  subs!: Subscription;


  constructor(private httpServer: HttpClassService) {
    this.myFormGroup = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      ssn: new FormControl(''),
    });
    this.localError = {status : '', statusText:'', name: ''}

  }

  ngOnInit(): void {
     this.httpServer.localError.next('criando um Error no EndPoint FIREBASEREALTIME ');
  }


  submitForms() {
    console.log("MyFormGroup: ", this.myFormGroup.value);
    this.httpServer.savePost(this.myFormGroup.value).subscribe({
      next: (data) => { window.alert("Save with Sucess")},
      error: (e) => { console.error("error",e), this.openModal(), this.localError =  {...e} },
      complete: () =>{ console.info('complete and and Observable'), this.myFormGroup.reset()}
    })
  }


  openModal() {
    this.displayStyle = "block";
  }
  closeModal() {
    this.displayStyle = "none";
    this.myFormGroup.reset()
  }
  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }


}
