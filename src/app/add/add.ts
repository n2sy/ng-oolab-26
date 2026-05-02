import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  private candSer = inject(GestionCandidats);
  private router = inject(Router);
  public isSubmitted = false;
  submitHandler(e, formValue) {
    // this.candSer.addNewCandidate(formValue);
    // this.router.navigateByUrl('/cv');
    let formData = new FormData();
    formData.set('avatar', e.target[4].files[0]);
    this.candSer.uploadAvatar(formData).subscribe({
      next: (data: any) => {
        formValue.avatar = data.url;
        this.candSer.addNewCandidateAPI(formValue).subscribe({
          next: (data: any) => {
            this.isSubmitted = true;
            alert(data.message);
            this.router.navigateByUrl('/cv');
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  uploadFile(e) {}
}
