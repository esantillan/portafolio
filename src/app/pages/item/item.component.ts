import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: Producto;
  productoID: number;

  constructor(private route: ActivatedRoute, 
    public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( parametros => {
        this.productosService.getProducto(parametros['id'])
          .subscribe( (producto: Producto) => {
            this.producto = producto;
            this.productoID = parametros['id'];
          });
      });
  }

}
