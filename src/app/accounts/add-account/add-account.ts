import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  imports: [],
  templateUrl: './add-account.html',
  styleUrl: './add-account.css',
})
export class AddAccount {
  allStatus = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHome = new EventEmitter();

  addAccount(nameValue, statusValue) {
    this.eventToHome.emit({
      name: nameValue,
      status: statusValue,
    });
  }
}
