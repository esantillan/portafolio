import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    console.log('servicio Info página listo');

    // leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (respuesta: InfoPagina) => {
        this.cargada = true;
        this.info = respuesta;

        console.log(respuesta.twitter);
      });
   }
}
