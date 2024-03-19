import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  numberOfProductsInCart = 0;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.numberOfProductsInCart$.subscribe(number => { this.numberOfProductsInCart = number })
  }

}
