import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidats {
  url = 'https://backendangulartrainingvercel.vercel.app/cv';
  private allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 53, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'marge', 'simpson', 43, 'conceptrice'),
  ];

  constructor(private http: HttpClient) {
    // this.allCandidates[0]['annee'] = 2026;
    // delete this.allCandidates[0].prenom;
    // console.log(this.allCandidates);
  }

  uploadAvatar(formData) {
    return this.http.post(
      'https://backendangulartrainingvercel.vercel.app/images/upload/cloud',
      formData,
    );
  }

  getCandidateById(IdCand) {
    return this.allCandidates.find((element) => element._id == IdCand);
  }
  getCandidateByIdAPI(idCand) {
    return this.http.get(`${this.url}/candidats/${idCand}`);
  }

  getAllCandidates() {
    return this.allCandidates;
  }
  getAllCandidatesAPI() {
    return this.http.get(`${this.url}/candidats`);
  }

  deleteCandidate(idCand) {
    let i = this.allCandidates.findIndex((cand) => cand._id == idCand);
    this.allCandidates.splice(i, 1);
  }

  deleteCandidateAPI(idCand) {
    return this.http.delete(`${this.url}/candidats/${idCand}`);
  }

  updateCandidate(uCand) {
    let i = this.allCandidates.findIndex((cand) => cand._id == uCand.id);
    this.allCandidates[i] = uCand;
  }
  updateCandidateAPI(uCand) {
    return this.http.put(`${this.url}/candidats/${uCand._id}`, uCand);
  }

  addNewCandidate(newCand) {
    newCand.id = this.allCandidates[this.allCandidates.length - 1]._id + 1;
    this.allCandidates.push(newCand);
  }

  addNewCandidateAPI(newCand) {
    return this.http.post(`${this.url}/candidats`, newCand);
  }

  addCandidate() {
    this.allCandidates.push(new Candidat(3, 'NEW', 'CANDIDATE', 21, 'designer', 'lisa.png'));
  }
}
