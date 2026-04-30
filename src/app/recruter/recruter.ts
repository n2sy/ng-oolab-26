import { Component, inject } from '@angular/core';
import { GestionRecrues } from '../services/gestion-recrues';
import { Item } from '../item/item';

@Component({
  selector: 'app-recruter',
  imports: [Item],
  templateUrl: './recruter.html',
  styleUrl: './recruter.css',
})
export class Recruter {
  public recrueSer = inject(GestionRecrues);
}
