import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-busqueda',
  standalone: false,
  templateUrl: './operador-busqueda.component.html',
  styleUrl: './operador-busqueda.component.css'
})
export class OperadorBusquedaComponent {

  /* LOGICA PARA ABRIR Y CERRAR LOS FILTROS */

  activeFiltros: boolean = false;

  setActiveFiltros(): boolean{
    return this.activeFiltros = !this.activeFiltros;
  }
}
