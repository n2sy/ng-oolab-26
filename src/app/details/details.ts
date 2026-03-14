import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  @Input() selCandidate: Candidat;
}
