import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GestionProducts } from '../../services/gestion-products';

@Component({
  selector: 'app-list-products',
  imports: [NgClass],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {
  public productSer = inject(GestionProducts);
}
