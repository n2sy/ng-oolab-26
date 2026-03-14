import { Component } from '@angular/core';
import { Item } from '../item/item';

@Component({
  selector: 'app-liste',
  imports: [Item],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {}
