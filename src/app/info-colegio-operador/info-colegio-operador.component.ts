import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-info-colegio-operador',
  standalone: false,
  templateUrl: './info-colegio-operador.component.html',
  styleUrl: './info-colegio-operador.component.css'
})
export class InfoColegioOperadorComponent {
  @Input() colegioSeleccionado!: User;
  @Output() cerrarVentana = new EventEmitter<boolean>();
  pedido: boolean = false;

  ngOnInit(){
    console.log(this.colegioSeleccionado);
  }

  hacerPedido(){
    return this.pedido = true;
  }

  regresar() {
    this.cerrarVentana.emit(true);
  }

}
