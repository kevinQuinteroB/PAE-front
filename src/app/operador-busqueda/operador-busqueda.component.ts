import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-operador-busqueda',
  standalone: false,
  templateUrl: './operador-busqueda.component.html',
  styleUrl: './operador-busqueda.component.css'
})
export class OperadorBusquedaComponent {
  @Input() listaColegios: User[] = [];

  /* LOGICA PARA ABRIR Y CERRAR LOS FILTROS */

  activeFiltros: boolean = false;

  setActiveFiltros(): boolean{
    return this.activeFiltros = !this.activeFiltros;
  }
}
