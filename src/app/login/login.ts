import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authSer = inject(Auth);
  showError = false;
  defaultLanguage = 'java';
  myComment = 'Rien à signaler...';
  submitHandler(e, f: NgForm) {
    e.preventDefault();
    this.authSer.seConnecter(f.value).subscribe({
      next: (data: any) => {
        alert(data.message);
        localStorage.setItem('access_token', data.token);
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
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
