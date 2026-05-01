import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-infos',
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  candidateToShow: Candidat;
  actRoute = inject(ActivatedRoute);
  router = inject(Router);
  candSer = inject(GestionCandidats);

  ngOnInit() {
    // V1
    this.candidateToShow = this.candSer.getCandidateById(this.actRoute.snapshot.paramMap.get('id'));
    if (!this.candidateToShow) this.router.navigateByUrl('/404');

    // V2
    // this.actRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     this.id = p.get('id');
    //   },
    // });
  }

  deleteHandler() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidate(this.candidateToShow.id);
      this.router.navigateByUrl('/cv');
    }
  }
}
