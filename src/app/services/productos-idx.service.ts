import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto_idx } from '../interfaces/producto_idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosIdxService {

  productos_idx: Producto_idx[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){
    this.http.get('https://portafolio-angular-8c657.firebaseio.com/productos_idx.json')
    .subscribe((respuesta: Producto_idx[]) => {
      console.log('Productos_idx obtenidos:');
      console.log(respuesta);

      this.productos_idx = respuesta;
      this.cargando = false;
    });
   }
}
