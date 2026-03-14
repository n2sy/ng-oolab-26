import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item/item';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  imports: [Item],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  @Input() tabCandidates: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }
}
