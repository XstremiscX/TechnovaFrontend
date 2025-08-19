import { Component } from '@angular/core';
import { ProductService } from '../services/product/product-service';
import { ProductsCard } from './products-card/products-card';
import { CartService } from '../services/cart/cart-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private productService: ProductService, private cartService: CartService) {};

  pageTitle = "Inicio";

  productList:any[] = [];

  filtersActive = false;

  toggleFilters(){
    this.filtersActive = !this.filtersActive;
  }

  getCartItems(){
    console.log(JSON.stringify(this.cartService.getCartItems()));
  }

  ngOnInit() {
    const response = this.productService.getAllProducts();

    response.subscribe({
      next: (data:any) => {
        this.productList = data;
      }
    });
  }

}
