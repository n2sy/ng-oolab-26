import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  candidateToUpdate = signal<any>({});
  actRoute = inject(ActivatedRoute);
  router = inject(Router);
  candSer = inject(GestionCandidats);

  ngOnInit() {
    // V1
    this.candSer.getCandidateByIdAPI(this.actRoute.snapshot.paramMap.get('id')).subscribe({
      next: (data: Candidat) => {
        console.log(data);
        this.candidateToUpdate.set(data);
      },
      error: (err) => {
        console.log(err);
        //this.router.navigateByUrl('/404');
      },
    });
  }

  submitHandler(formValue) {
    formValue._id = this.candidateToUpdate()._id;
    this.candSer.updateCandidateAPI(formValue).subscribe({
      next: (data: any) => {
        alert(data.message);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
