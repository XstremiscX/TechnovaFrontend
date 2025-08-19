import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product/product-service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) {}

  product: any;

  goBack(){
    this.location.back();
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
