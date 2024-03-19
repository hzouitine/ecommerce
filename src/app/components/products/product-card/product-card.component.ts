import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  @Input() product!: Product;
  showAddToCartToast = false;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.showAddToCartToast = true;
  }
}
