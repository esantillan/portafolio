import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: Equipo[] = [];
  infoCargada = false;
  equipoCargado = false;

  constructor(private http: HttpClient) {
    console.log('servicio Info página listo');
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (respuesta: InfoPagina) => {
        this.infoCargada = true;
        this.info = respuesta;
      });
   }

   private cargarEquipo(){
    this.http.get('https://portafolio-angular-8c657.firebaseio.com/equipo.json')
    .subscribe( (respuesta: Equipo[]) => {
      this.equipo = respuesta;
      this.equipoCargado = true;
    });
   }
}
