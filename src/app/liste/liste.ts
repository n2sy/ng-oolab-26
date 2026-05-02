import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { Item } from '../item/item';
import { Candidat } from '../models/candidat';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-liste',
  imports: [Item],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
  // providers: [GestionCandidats],
})
export class Liste {
  tabCandidates = signal([]);
  @Output() eventToCv = new EventEmitter<Candidat>();

  private candSer = inject(GestionCandidats);
  ngOnInit() {
    this.candSer.getAllCandidatesAPI().subscribe({
      next: (data: Candidat[]) => {
        console.log(data);
        this.tabCandidates.set(data);
      },
      error: (err) => {
        alert('Connexion impossible');
        this.tabCandidates.set(this.candSer.getAllCandidates());
      },
    });
  }

  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }

  showCandidates() {
    console.log(this.candSer.getAllCandidates());
  }
}
