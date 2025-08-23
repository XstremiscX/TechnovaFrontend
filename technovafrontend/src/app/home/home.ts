import { Component } from '@angular/core';
import { ProductService } from '../services/product/product-service';
import { ProductsCard } from './products-card/products-card';
import { CartService } from '../services/cart/cart-service';
import { CartView } from './cart-view/cart-view';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsCard, CartView],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private productService: ProductService, private cartService: CartService) {};

  pageTitle = "Inicio";

  productList:any[] = [];

  cartItems:any;

  filtersActive = false;

  cartViewActive = false;

  toggleFilters(){
    this.filtersActive = !this.filtersActive;
  }

  toggleCartView(){
    this.cartViewActive = !this.cartViewActive;
  }

  getCartItems(){

    this.cartItems = this.cartService.getCartItems();

    // console.log(JSON.stringify(this.cartItems));

    this.toggleCartView();

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
