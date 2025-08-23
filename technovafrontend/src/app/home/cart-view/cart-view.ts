import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from './cart-items/cart-items';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'cart-view',
  standalone: true,
  imports: [CartItem, CurrencyPipe],
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.css'
})
export class CartView {
  @Output() closeCart = new EventEmitter<void>();

  @Input() cartItems: any;

  close(){
    this.closeCart.emit();
  }

}
