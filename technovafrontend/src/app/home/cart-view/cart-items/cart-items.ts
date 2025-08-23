import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.css'
})
export class CartItem {
  @Input() item: any;

  increase() {
    
    this.item.quantity++;

  }
  decrease() {

    if(this.item.quantity > 1) {
      this.item.quantity--;
    }else{
      this.item.quantity = 1;
    }

  }
}
