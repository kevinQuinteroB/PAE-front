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

  cerrarPedido() { 
    this.cerrar.emit();
  }
}
