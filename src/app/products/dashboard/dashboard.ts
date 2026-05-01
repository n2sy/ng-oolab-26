import { Component, computed, inject } from '@angular/core';
import { GestionProducts } from '../../services/gestion-products';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private productSer = inject(GestionProducts);

  totalPrice = computed(() => {
    let result = this.productSer.allProducts().filter((p) => p.isSelected);
    return result.reduce((total, currentProduct) => total + currentProduct.price, 0);
  });

  nbSelected = computed(() => {
    return this.productSer.allProducts().filter((p) => p.isSelected).length;
  });
}
