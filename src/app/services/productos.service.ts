import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){
    this.http.get('https://portafolio-angular-8c657.firebaseio.com/productos.json').subscribe((respuesta: Producto[]) => {
      console.log('Productos obtenidos:');
      console.log(respuesta);

      const properties = Object.getOwnPropertyNames(respuesta);

      properties.forEach(propertyName => {
        this.productos.push(respuesta[propertyName]);
      });
    });
   }
}
