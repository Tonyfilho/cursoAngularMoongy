import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  myUpdateForm!: FormGroup;


  constructor(private fb: FormBuilder) {
    /**Ja na criação fo FormBuilder, posso passar um array, um objeto e setar um valor default,
     *  passar um null, posso setar o evento de blur ou onchange do mouse */
    this.myUpdateForm = fb.group({
      name: [''],
      address: [''],
      email: [''],
      ssn: { value: '111222', disabled: true },
      passwordGroup: fb.group({
        password: '',
        pConfirm: [''],
      })
    });
  }

  ngOnInit(): void {
  }

  updateForm(){
    this.myUpdateForm.patchValue({
      name: 'juan Victor',
      address: 'afonso castro, setubal',
      email: 'jvmutiz@gmail.com',
    });
  }
  polulateForm(){
    this.myUpdateForm.setValue({
      name: 'tony filho',
      address: 'afonso castro, setubal',
      email: 'filhotony777@gmail.com',
      ssn: '1111777777',
      passwordGroup: {
        password: '11122255588',
        pConfirm: '11122255588'
      }
    });

  }


  submitForms() {
    const { name, address, email, ssn, passwordGroup: { password, pConfirm } } = this.myUpdateForm.value;
    console.group();
    console.log('Destruiction', name, address, email, ssn, password, pConfirm);
    console.groupEnd();



  }
}
