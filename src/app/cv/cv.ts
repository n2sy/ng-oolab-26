import { Component, inject } from '@angular/core';
import { Liste } from '../liste/liste';
import { Details } from '../details/details';
import { Candidat } from '../models/candidat';
import { First } from '../services/first';
import { GestionCandidats } from '../services/gestion-candidats';
import { Recruter } from '../recruter/recruter';

@Component({
  selector: 'app-cv',
  imports: [Liste, Details, Recruter],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
  providers: [First],
})
export class Cv {
  allCandidates: Candidat[] = [];
  selectedCandidate: Candidat;

  //   mm(private firstSer: First) {}
  private firstSer = inject(First);
  private candSer = inject(GestionCandidats);

  ngOnInit() {
    this.firstSer.afficherBonjour();
    this.allCandidates = this.candSer.getAllCandidates();
  }

  recupererCandidat(cand) {
    this.selectedCandidate = cand;
  }

  addCand() {
    this.candSer.addCandidate();
  }

  showCandidates() {
    console.log(this.candSer.getAllCandidates());
  }
}
