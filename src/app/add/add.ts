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
  submitHandler(formValue) {
    this.candSer.addNewCandidate(formValue);
    this.router.navigateByUrl('/cv');
  }
}
