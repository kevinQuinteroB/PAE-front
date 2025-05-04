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

  alimentos: string[] = ['Arroz', 'Frijoles', 'Leche', 'Pan', 'Huevos'];
  fechas: string[] = ['2025-06-01', '2025-06-15', '2025-07-01'];

  cantidades: number[] = [1];



  textoFecha = "Fecha de Entrega"
  hoy: string = new Date().toISOString().split('T')[0];

  mostrarSelectorFecha = false;
  fechaSeleccionada: string | null = null;

  seleccionarFecha(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fechaSeleccionada = input.value;
    this.textoFecha = this.fechaSeleccionada.toString();
    this.mostrarSelectorFecha = false;
  }


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
