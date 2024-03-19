import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  listOfProductsAddedToCart: Array<CartItem>;
  listOfProductsAddedToCart$ = new BehaviorSubject<Array<CartItem>>([]);
  numberOfProductsInCart$ = new BehaviorSubject<number>(0);
  totalPriceInCart$ = new BehaviorSubject<number>(0);
  constructor() { 
    this.listOfProductsAddedToCart = this.initCart();
    this.publish();
  }

  addToCart(product: Product) {
    const carItem = this.listOfProductsAddedToCart.find(p => p.product.id == product.id);
    if (carItem) {
      carItem.quantity++;
    } else {
      this.listOfProductsAddedToCart.push(new CartItem(product, 1));
    }
    this.publish();
  }

  calculateTotalPrice(){
    const totalPrice = this.listOfProductsAddedToCart.map((item: CartItem) => item.quantity * item.product.price).reduce((prev: number, current: number) => prev + current, 0)
    this.totalPriceInCart$.next(totalPrice);

  }

  removeFromCart(product: Product){
    const index = this.listOfProductsAddedToCart.findIndex(cartItem => cartItem.product.id === product.id);
    this.listOfProductsAddedToCart.splice(index, 1);
    this.publish();
  }

  publish(){
    this.numberOfProductsInCart$.next(this.listOfProductsAddedToCart.length);
    this.listOfProductsAddedToCart$.next(this.listOfProductsAddedToCart);
    this.calculateTotalPrice();

    this.persistCart();
  }

  persistCart(){
    localStorage.setItem('CART',JSON.stringify(this.listOfProductsAddedToCart));
  }

  initCart(){
    const cart = localStorage.getItem('CART') || '[]';
    return JSON.parse(cart);
  }
}
