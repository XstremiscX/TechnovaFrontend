import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Creamos un array para almacenar los productos del carrito
  cart: any[] = [];

  // Metodo para agregar elementos al carrito.
  addItem(item: any){

    // Obtenemos el carrito del localStorage
    const cartItem = localStorage.getItem('cart');
    // Verificamos si hay elementos en el carrito;
    if(cartItem){

      //En caso de que si hayan elementos en el carrito, convertimos el JSON a un objeto y lo asignamos a la variable cart
      this.cart = JSON.parse(cartItem);

      // Esta variable permite verificar si existe o no un elemento en el carrito.
      let exists = false;

      // Este bucle for se encarga de recorrer todos los elementos del carrito y aumenta la cantidad del producto si ya existe.
      for(const i of this.cart){

        if(i.product.product_id === item.product_id){

          i.quantity += 1;

          // Marcamos que el elemento ya existe.
          exists = true;

        }

      }

      // Si el elemento no existe, lo agregamos al carrito.
      if(!exists){

        this.cart.push({product: item, quantity: 1});

      }

      // Una vez que hemos actualizado el carrito, lo guardamos en el localStorage.
      localStorage.setItem('cart', JSON.stringify(this.cart));

      this.cart = [];

    }else{

      // En el caso de que no existe ningun carrito previo, entonces agergamos el producto al arreglo cart y lo guardamos en el localStorage.
      this.cart.push({product: item, quantity: 1});

      localStorage.setItem('cart', JSON.stringify(this.cart));

      this.cart = [];

    }
  }

  getCartItems(){

    this.cart = [];
    // Obtenemos los datos del carrito que esta en el local storage.
    const cartItem = localStorage.getItem('cart');

    if(cartItem){

      this.cart = [];
      
      // Si existen datos entonces devolvemos los datos del carrito.
      this.cart = JSON.parse(cartItem);

      return this.cart;


    }else{

      // Si no existen entonces retornamos un mensaje de no hay elementos en el carrito.
      return "No hay elementos en el carrito"

    }

  }
  
}
