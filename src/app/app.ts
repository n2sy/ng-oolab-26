import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';

@Component({
  selector: 'app-root',
  imports: [First],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('ng-oolb-26');
}
