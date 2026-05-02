import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  url = 'https://backendangulartrainingvercel.vercel.app/auth';
  isLogged = signal<boolean>(localStorage.getItem('access_token') ? true : false);
  private http = inject(HttpClient);
  seConnecter(identifiants: any) {
    this.isLogged.set(true);
    return this.http.post(`${this.url}/login`, identifiants);
  }

  inscription(identifiants) {}

  seDeconnecter() {
    localStorage.removeItem('access_token');
    this.isLogged.set(false);
  }

  estConnecte() {
    let token = localStorage.getItem('access_token');
    if (token) this.isLogged.set(true);
    else this.isLogged.set(false);

    return !!token;
  }
}
