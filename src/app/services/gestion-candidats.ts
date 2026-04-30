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

  getCandidateById(IdCand) {
    return this.allCandidates.find((element) => element.id == IdCand);
  }

  getAllCandidates() {
    return this.allCandidates;
  }

  addCandidate() {
    this.allCandidates.push(new Candidat(3, 'NEW', 'CANDIDATE', 21, 'designer', 'lisa.png'));
  }
}
