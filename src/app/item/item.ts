import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomDir } from '../custom-dir';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';

@Component({
  selector: 'app-item',
  imports: [CustomDir, NoAvatarPipe],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() oneCandidate: Candidat;
  @Output() eventToListe = new EventEmitter<Candidat>();

  ngOnInit() {}

  sendCandidateToListe() {
    this.eventToListe.emit(this.oneCandidate);
  }
}
