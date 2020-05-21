import { Component, OnInit } from '@angular/core';
import { ProductosIdxService } from '../../services/productos-idx.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public _service: ProductosIdxService) { }

  ngOnInit(): void {
  }

}
