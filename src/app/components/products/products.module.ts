import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [{
  path: '', component: ProductsComponent,
}]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbToastModule
  ],
  exports:[ RouterModule ]
})
export class ProductsModule { }
