import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product/product-service';
import { CartService } from '../services/cart/cart-service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location, private cartService: CartService) {}

  product: any;

  goBack(){
    this.location.back();
  }

  addToCart(){

    Swal.fire({
      title: 'Producto agregado',
      text: `El producto ${this.product.product_name} ha sido agregado al carrito.`,
      icon: 'success',
      showConfirmButton:false,
      timer: 4000
    })

    const Item = {
      "product_id": this.product.product_id,
      "product_name":this.product.product_name,
      "price": this.product.price,
      "product_image": this.product.product_image,
      "brand_name": this.product.brand_name,
      "category_name": this.product.category_name
    }

    this.cartService.addItem(Item);
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if(id){
          this.productService.getProductDetails(id).subscribe(
            data => {
              this.product = data;
              this.product = this.product[0];
            }
          )
        }else{
          alert("El producto buscado no ha sido encontrado.")
        }
      }
    )
  }
}
