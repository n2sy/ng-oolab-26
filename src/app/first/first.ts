import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Second } from '../second/second';

@Component({
  selector: 'app-first',
  imports: [FormsModule, Second],
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

  RecupererMsg(msg: any) {
    // alert(msg);
    this.prenom = msg;
  }

  traitement() {
    alert("J'ai été cliqué");
  }
}
