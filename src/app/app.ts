import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Cv } from './cv/cv';
import { HomeAccount } from './accounts/home-account/home-account';
import { Direct } from './direct/direct';

@Component({
  selector: 'app-root',
  imports: [First, Second, Cv, HomeAccount, Direct],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('ng-oolb-26');

  logger(msg: any) {
    console.log(msg);
  }
}
