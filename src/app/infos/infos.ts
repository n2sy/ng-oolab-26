import { Component, inject, signal } from '@angular/core';
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
  candidateToShow = signal<any>({});
  actRoute = inject(ActivatedRoute);
  router = inject(Router);
  candSer = inject(GestionCandidats);

  ngOnInit() {
    // V1
    this.candSer.getCandidateByIdAPI(this.actRoute.snapshot.paramMap.get('id')).subscribe({
      next: (data: Candidat) => {
        console.log(data);
        this.candidateToShow.set(data);
      },
      error: (err) => {
        console.log(err);
        //this.router.navigateByUrl('/404');
      },
    });

    // V2
    // this.actRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     this.id = p.get('id');
    //   },
    // });
  }

  deleteHandler() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidateAPI(this.candidateToShow()._id).subscribe({
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
}
