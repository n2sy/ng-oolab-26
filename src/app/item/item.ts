import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { CustomDir } from '../custom-dir';

@Component({
  selector: 'app-item',
  imports: [CustomDir],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() oneCandidate: Candidat;
  @Output() eventToListe = new EventEmitter<Candidat>();

  sendCandidateToListe() {
    this.eventToListe.emit(this.oneCandidate);
  }
}
