import { Component } from '@angular/core';

@Component({
  selector: 'Loomenes-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  promoCode = '';

  products = [
    {
      id: '1',
      name: 'Bộ vệ sinh giày cơ bản',
      price: 299000,
      quantity: 2,
      url: 'assets/products/bo-ve-sinh-giay-co-ban.jpg',
    },
    {
      id: '2',
      name: 'Bộ vệ sinh giày chuyên sâu',
      price: 499000,
      quantity: 1,
      url: 'assets/products/bo-ve-sinh-giay-chuyen-sau.jpg',
    },
    {
      id: '3',
      name: 'Bộ vệ sinh giày cao cấp',
      price: 799000,
      quantity: 1,
      url: 'assets/products/bo-ve-sinh-giay-cao-cap.jpg',
    },
    {
      id: '4',
      name: 'Bộ kit vệ sinh giày Crep',
      price: 500000,
      quantity: 1,
      url: 'assets/products/bo-kit-ve-sinh-giay.jpg',
    },
  ];

  onDecrease(productId: String) {
    this.products.forEach((product) => {
      if (product.id === productId) {
        if (product.quantity <= 1) this.onDelete(productId);
        else product.quantity--;
      }
    });
  }

  onIncrease(productId: String) {
    this.products.forEach((product) => {
      if (product.id === productId) {
        product.quantity++;
      }
    });
  }

  onDelete(productId: String) {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    this.products.splice(index, 1);
  }

  onApplyPromoCode() {
    const element = document.getElementById('promoCodeInput');
    if (element instanceof HTMLInputElement) {
      const promoCodeValue = element.value;
      this.promoCode = promoCodeValue;
    }
  }
}
