import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-exp-signal',
  imports: [],
  templateUrl: './exp-signal.html',
  styleUrl: './exp-signal.css',
})
export class ExpSignal {
  prenom = signal<string>('nidhal');
  annee = signal<number>(2026);

  message = computed(() => {
    return `${this.prenom()} -- ${this.annee()}`;
  });

  constructor() {
    effect(() => {
      console.log('Année changé en ', this.annee());
    });
  }
  updatePrenom() {
    this.prenom.set(`Aymen`);
  }
  updatePrenomV2() {
    this.prenom.update((previousValue) => {
      return `${previousValue} jelassi`;
    });
  }

  incrementAnnee() {
    this.annee.update((previousValue) => {
      return ++previousValue;
    });
  }
}
