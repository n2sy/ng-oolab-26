import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  defaultLanguage = 'java';
  myComment = 'Rien à signaler...';
  submitHandler(e, f: NgForm) {
    e.preventDefault();
    console.log(f.value);
  }

  generatePwd(f: NgForm) {
    f.setValue({
      login: '',
      password: crypto.randomUUID(),
      infos: {
        langage: '',
        comment: '',
      },
      erreurs: '',
    });
  }
  generatePwdII(f: NgForm) {
    f.form.patchValue({
      password: crypto.randomUUID(),
    });
  }

  resetForm(f: NgForm) {
    f.reset();
  }
}
