import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styleUrl: './react-form.css',
})
export class ReactForm {
  signUpForm: any = FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('nidhal', Validators.required),
      addrMail: new FormControl(null, [Validators.required, Validators.email]),
      skills: new FormArray([]),
    });
  }

  addSkill() {
    let newCtrl = new FormControl(null, Validators.required);
    this.signUpForm.get('skills').push(newCtrl);
  }

  submitHandler() {
    console.log(this.signUpForm.value);
  }
}
