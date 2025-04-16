import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-pedido-operador',
  standalone: false,
  templateUrl: './pedido-operador.component.html',
  styleUrl: './pedido-operador.component.css'
})
export class PedidoOperadorComponent {
  @Input() pedido: boolean = true;

  @Output() cerrar = new EventEmitter<void>();

  cantidadElementos: number = 1;
  cerrarPedido() { 
    this.cerrar.emit();
  }

  aggElemento(){
    this.cantidadElementos = this.cantidadElementos + 1;
  }
  deleteElemento(){
    if(this.cantidadElementos != 1){
      this.cantidadElementos = this.cantidadElementos - 1;
    }
  }
}
