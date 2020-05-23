import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Producto_idx } from '../interfaces/producto_idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto_idx[] = [];
  productosFiltrados: Producto_idx[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://portafolio-angular-8c657.firebaseio.com/productos_idx.json')
        .subscribe((respuesta: Producto_idx[]) => {
          this.productos = respuesta;
          this.cargando = false;

          resolve();
        });
    });

  }

  getProducto(id: string) {
    return this.http.get(`https://portafolio-angular-8c657.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length == 0){
      // cargar productos
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string){
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    
    this.productos.forEach( producto => {
      const tituloLower = producto.titulo.toLocaleLowerCase();
      const categoriaLower = producto.categoria.toLocaleLowerCase();

      if ( categoriaLower.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productosFiltrados.push(producto);
      }
    });
  }
}
