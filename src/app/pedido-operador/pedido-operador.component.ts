import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { InventarioOperador } from '../models/inventario-operador';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { InventarioService } from '../services/inventario.service';
import { Pedido } from '../models/pedido';

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
  inventario!: InventarioOperador[];
  operadorRegistrado!: User;
  pedidoData!: Pedido;

  seleccion = {
  idFood: null as number | null,
  quantity: 1,
  comment: ''
};



  constructor(
    private userService: UserService,
    private inventarioService: InventarioService
  ){}

  ngOnInit() {
  this.operadorRegistrado = this.userService.getUser();
  console.log('Usuario:', this.operadorRegistrado);
  console.log('Token:', this.operadorRegistrado.token);
  console.log('ID:', this.operadorRegistrado.id);

  if (!this.operadorRegistrado || !this.operadorRegistrado.token || !this.operadorRegistrado.id) {
    console.error('Error: usuario no válido');
    return;
  }

  this.userService.listarInventarioOperador(this.operadorRegistrado.token, this.operadorRegistrado.id).subscribe(
    (data: InventarioOperador[]) => {
      this.inventario = data;
      console.log('Inventario:', this.inventario);
    },
    (error) => {
      console.error('Error al obtener inventario:', error);
    }
  );
}


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

  hacerPedido() {
    if (!this.esFormularioValido()) return;

    this.pedidoData = {
      logistics: { idUser: this.operadorRegistrado.id },
      school: { idUser: 2 },  // Cambia según tu lógica
      food: { idFood: this.seleccion.idFood! },  // El "!" indica que no es null
      quantity: this.seleccion.quantity,
      status: 'enviada',
      deliveryDate: this.fechaSeleccionada!,
      comment: this.seleccion.comment
    };

    console.log('Pedido creado:', this.pedidoData);
    
    this.inventarioService.crearOrden(this.pedidoData, this.operadorRegistrado.token).subscribe({
  next: (response) => {
    console.log('Pedido creado en backend:', response);
    // aquí puedes notificar éxito al usuario o limpiar el formulario
  },
  error: (err) => {
    console.error('Error creando pedido:', err);
  }
});

  }


esFormularioValido(): boolean {
  return (
    this.fechaSeleccionada !== null &&
    this.seleccion.idFood !== null &&
    this.seleccion.quantity > 0 &&
    this.seleccion.comment.trim() !== ''
  );
}



}
