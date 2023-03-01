import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { HttpClassService } from '../http-class.service';

@Component({
  selector: 'app-error-hangling',
  templateUrl: './error-handling.component.html',
  // styleUrls: ['./error-handling.component.css']
   styleUrls: ['../post/post.component.css']
})
export class ErrorHandlingComponent implements OnInit, AfterViewInit {

  myFormGroup!: FormGroup;
  @ViewChild('exampleModal') myModal!: ElementRef;
  @ViewChild('exampleModalLabel') myInput!: ElementRef;

  constructor(private httpServer: HttpClassService) {
    this.myFormGroup = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      ssn: new FormControl(''),
    });
  }

  ngOnInit(): void {
  //  console.log( this.modalOpen.nativeElement.class('testes'));

  }


  submitForms() {
    console.log("MyFormGroup: ", this.myFormGroup.value);
    this.httpServer.savePostUpdateId(this.myFormGroup.value + 1).subscribe({
      next: (data) => { window.alert("Save with Sucess"),  this.openModal()},
      error: (e) => {window.alert("Ops something wrong.."), console.error("error",e), this.openModal()},
      complete: () =>{ console.info('complete and and Observable'), this.myFormGroup.reset()}
    })
  }

  openModal() {
    this.myModal?.nativeElement('shown.bs.modal', () => {
      this.myInput?.nativeElement.focus()
    })

  }

  ngAfterViewInit() {
    console.log("exampleModal");
  //   setTimeout(() => {
  //     console.log(this.modalOpen.nativeElement.class('testes'));
  //   }, 2000);


  }

}
