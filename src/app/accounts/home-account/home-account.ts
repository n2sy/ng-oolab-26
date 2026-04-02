import { Component } from '@angular/core';
import { AddAccount } from '../add-account/add-account';
import { ItemAccount } from '../item-account/item-account';

@Component({
  selector: 'app-home-account',
  imports: [AddAccount, ItemAccount],
  templateUrl: './home-account.html',
  styleUrl: './home-account.css',
})
export class HomeAccount {
  tabAccounts = [
    {
      name: 'Dali Account',
      status: 'Active',
    },
    {
      name: 'Taha Account',
      status: 'Inactive',
    },
  ];

  addNewAccount(newAcc) {
    this.tabAccounts.push(newAcc);
  }
}
