import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Array<Product> | undefined;

  constructor(private productService: ProductService){

  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
