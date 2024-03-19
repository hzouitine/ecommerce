import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  listOfProductsAddedToCart: Array<CartItem> = [];
  listOfProductsAddedToCart$ = new BehaviorSubject<Array<CartItem>>([]);
  numberOfProductsInCart$ = new Subject<number>();
  constructor() { }

  addToCart(product: Product) {
    const carItem = this.listOfProductsAddedToCart.find(p => p.product.id == product.id);
    if (carItem) {
      carItem.quantity++;
    } else {
      this.listOfProductsAddedToCart.push(new CartItem(product, 1));
    }
    this.numberOfProductsInCart$.next(this.listOfProductsAddedToCart.length);
  }
}
