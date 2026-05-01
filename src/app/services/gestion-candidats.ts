import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidats {
  private allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 53, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'marge', 'simpson', 43, 'conceptrice'),
  ];

  constructor() {
    // this.allCandidates[0]['annee'] = 2026;
    // delete this.allCandidates[0].prenom;
    // console.log(this.allCandidates);
  }

  getCandidateById(IdCand) {
    return this.allCandidates.find((element) => element.id == IdCand);
  }

  getAllCandidates() {
    return this.allCandidates;
  }

  deleteCandidate(idCand) {
    let i = this.allCandidates.findIndex((cand) => cand.id == idCand);
    this.allCandidates.splice(i, 1);
  }

  updateCandidate(uCand) {
    let i = this.allCandidates.findIndex((cand) => cand.id == uCand.id);
    this.allCandidates[i] = uCand;
  }

  addNewCandidate(newCand) {
    newCand.id = this.allCandidates[this.allCandidates.length - 1].id + 1;
    this.allCandidates.push(newCand);
  }

  addCandidate() {
    this.allCandidates.push(new Candidat(3, 'NEW', 'CANDIDATE', 21, 'designer', 'lisa.png'));
  }
}
