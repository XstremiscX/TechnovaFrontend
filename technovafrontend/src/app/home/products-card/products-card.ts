import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart-service';

@Component({
  selector: 'product-card',
  standalone:true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css'
})
export class ProductsCard {

  constructor(private cartService: CartService) {}

  @Input() product:any;

  addToCart(){
    
    this.cartService.addItem(this.product);

  }
}
