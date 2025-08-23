import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart-service';
import Swal from 'sweetalert2';


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

    Swal.fire({
      title: 'Producto agregado al carrito',
      text: "Se ha agregado el producto " + this.product.product_name + " al carrito.",
      icon: 'success',
      showConfirmButton: false,
      timer: 4000
    })
    
    this.cartService.addItem(this.product);

  }
}
