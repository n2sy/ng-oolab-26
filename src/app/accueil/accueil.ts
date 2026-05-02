import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpObservable } from '../exp-observable/exp-observable';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, ExpObservable],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
  router = inject(Router);
  http = inject(HttpClient);

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('Erreur inconnue ', err);
      },
      complete: () => {
        console.log('Flux fermée');
      },
    });
  }
  goToCv() {
    this.router.navigateByUrl('/cv');
  }

  goToAccounts() {
    this.router.navigate(['accounts']);
  }
}
