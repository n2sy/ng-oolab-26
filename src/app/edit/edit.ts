import { Component, inject } from '@angular/core';
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
  candidateToUpdate: Candidat;
  actRoute = inject(ActivatedRoute);
  router = inject(Router);
  candSer = inject(GestionCandidats);

  ngOnInit() {
    // V1
    this.candidateToUpdate = this.candSer.getCandidateById(
      this.actRoute.snapshot.paramMap.get('id'),
    );
  }

  submitHandler(formValue) {
    formValue.id = this.candidateToUpdate.id;
    this.candSer.updateCandidate(formValue);
    this.router.navigateByUrl('/cv');
  }
}
