import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { GestionRecrues } from '../services/gestion-recrues';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [NoAvatarPipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  @Input() selCandidate: Candidat;

  public recrueSer = inject(GestionRecrues);
}
