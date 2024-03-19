import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  listOfProductsAddedToCart: Array<CartItem> = [];
  totalPrice= 0;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cartService.listOfProductsAddedToCart$.subscribe(listOfProductsAddedToCart => this.listOfProductsAddedToCart=listOfProductsAddedToCart);
    this.cartService.totalPriceInCart$.subscribe(totalPrice => this.totalPrice = totalPrice);

  }

  quantityChanged($event: any){
    this.cartService.calculateTotalPrice();
  }

  removeItem(product: Product){
    this.cartService.removeFromCart(product);
  }
  
}
