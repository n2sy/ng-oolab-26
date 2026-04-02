import { NgStyle, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  imports: [NgStyle, NgClass],
  templateUrl: './direct.html',
  styleUrl: './direct.css',
})
export class Direct {
  class1 = true;
  class2 = false;
  class3 = true;

  updateClasses() {
    this.class2 = true;
    this.class3 = false;
  }
}
