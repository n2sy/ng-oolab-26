import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.html',
  standalone: true,
})
export class First {
  prenom: string = 'Dali';
  year: number = 2026;

  bgColor: string = 'pink';
  hd: boolean = false;

  updatePrenom(inp: any) {
    this.prenom = inp;
  }

  traitement() {
    alert("J'ai été cliqué");
  }
}
