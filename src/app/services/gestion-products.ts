import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionProducts {
  allProducts = signal<any[]>([]);

  constructor() {
    this.allProducts.set([
      { id: crypto.randomUUID().slice(0, 3), name: 'Product 1', price: 432, isSelected: true },
      { id: crypto.randomUUID().slice(0, 3), name: 'Product 2', price: 666, isSelected: false },
      { id: crypto.randomUUID().slice(0, 3), name: 'Product 3', price: 211, isSelected: false },
    ]);

    effect(() => {
      console.log('La nouvelle list de produits est : ', this.allProducts());
    });
  }

  updateProduct(idProduct: any) {
    let i = this.allProducts().findIndex((p) => p.id == idProduct);
    this.allProducts.update((previousTab) => {
      previousTab[i].isSelected = !previousTab[i].isSelected;
      return [...previousTab];
    });
  }

  deleteProduct(idProduct: any) {
    this.allProducts.update((previousTab) => {
      return previousTab.filter((p) => p.id != idProduct);
    });
  }

  addProduct(newProduct: any) {
    newProduct.id = crypto.randomUUID().slice(0, 3);

    this.allProducts.update((previousTab) => {
      previousTab.push(newProduct);
      return [...previousTab];
    });
  }
}
