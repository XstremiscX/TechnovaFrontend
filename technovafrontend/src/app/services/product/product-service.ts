import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Instanciamos HttpClient
  constructor (private http:HttpClient){};

  // Definimos la URL base para la API que maneja los productos.
  baseUrl = "http://localhost:3000/products";

  // Metodo para obtener todos los productos.
  getAllProducts(){

    const response = this.http.get(this.baseUrl);

    return response;  

  }

  // Metodo para obtener los datos de un producto por su ID.
  getProductDetails(id:string){

    const response = this.http.get(`${this.baseUrl}/${id}`);

    return response;

  }
  
  
}
