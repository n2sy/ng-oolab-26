import { CurrencyPipe, DatePipe, NgClass, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short-pipe';
import { FilterPipe } from '../pipes/filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-servers',
  imports: [
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    ShortPipe,
    FilterPipe,
    FormsModule,
  ],
  templateUrl: './manage-servers.html',
  styleUrl: './manage-servers.css',
})
export class ManageServers {
  selectedStatus = '';
  tabServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 1, 15),
      status: 'stable',
    },
    {
      name: 'Production Test Server',
      type: 'large',
      date_d: new Date(2020, 1, 15),
      status: 'critical',
    },
    {
      name: 'Test Development Server',
      type: 'small',
      date_d: new Date(2020, 1, 15),
      status: 'stable',
    },
    {
      name: 'Nidhal Server',
      type: 'meduim',
      date_d: new Date(2020, 1, 15),
      status: 'offline',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st === 'stable',
      'list-group-item-warning': st === 'offline',
      'list-group-item-danger': st === 'critical',
    };
  }
}
