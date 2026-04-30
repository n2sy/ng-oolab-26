import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
  router = inject(Router);
  goToCv() {
    this.router.navigateByUrl('/cv');
  }

  goToAccounts() {
    this.router.navigate(['accounts']);
  }
}
