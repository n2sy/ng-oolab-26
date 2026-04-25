import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Cv } from './cv/cv';
import { HomeAccount } from './accounts/home-account/home-account';
import { Direct } from './direct/direct';
import { ManageServers } from './manage-servers/manage-servers';
import { Recruter } from './recruter/recruter';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [First, Second, Cv, HomeAccount, Direct, ManageServers, Recruter, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('ng-oolb-26');

  logger(msg: any) {
    console.log(msg);
  }
}
