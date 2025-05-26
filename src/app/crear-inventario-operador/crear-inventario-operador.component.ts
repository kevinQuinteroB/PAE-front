import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../models/food';
import { User } from '../models/user';
import { InventarioService } from '../services/inventario.service';
import { UserService } from '../services/user.service';
import { Inventario } from '../models/inventario';

@Component({
  selector: 'app-crear-inventario-operador',
  standalone: false,
  templateUrl: './crear-inventario-operador.component.html',
  styleUrl: './crear-inventario-operador.component.css'
})
export class CrearInventarioOperadorComponent {

  @Input() alimentosDisponibles: Food[] = [];  // Array con los alimentos disponibles
  @Output() cerrar = new EventEmitter<void>();
  @Output() inventarioCreado = new EventEmitter<void>();

  productoSeleccionado: string = '';  // Producto seleccionado
  descripcionSeleccionada: Food | null = null;
  // Cambiar a tipo Food
  descripcionesDisponibles: Food[] = [];  // Descripciones disponibles para el producto seleccionado
  productosUnicos: string[] = [];  // Lista de productos únicos (sin duplicados)
  operadorRegistrado!: User;

  cantidad: number = 1;
  fecha: string = '';  // Variable para almacenar la fecha seleccionada
  hoy: string = new Date().toISOString().split('T')[0];
  

  constructor(
      private userService: UserService,
      private inventarioService: InventarioService
    ){}

  ngOnInit() {
    this.operadorRegistrado = this.userService.getUser();
    this.obtenerProductosUnicos();
  }

  // Método para obtener los productos únicos
  obtenerProductosUnicos() {
    const nombresProductos = this.alimentosDisponibles.map(food => food.name);
    this.productosUnicos = [...new Set(nombresProductos)];  // Usamos Set para eliminar duplicados
  }

  // Filtrar las descripciones según el producto seleccionado
  // Filtrar las descripciones según el producto seleccionado
// Filtrar las descripciones según el producto seleccionado
filtrarDescripciones() {
  if (this.productoSeleccionado) {
    // Filtramos todos los productos con el mismo nombre
    const productosFiltrados = this.alimentosDisponibles.filter(item => item.name === this.productoSeleccionado);

    // Almacenamos los productos completos (con idFood y description) en descripcionesDisponibles
    this.descripcionesDisponibles = productosFiltrados;
  }
}






crearObjetoInventario() {
  if (this.descripcionSeleccionada) {
    const nuevoInventario = {
      logistics: {
        idUser: 1  // Aquí puedes asignar el ID del usuario de logística
      },
      food: {
        idFood: this.descripcionSeleccionada.idFood,  // ID del alimento
        description: this.descripcionSeleccionada.description  // Descripción seleccionada
      },
      expirationDate: this.fecha,  // Fecha de expiración seleccionada
      quantity: this.cantidad  // Cantidad ingresada
    };

    // Puedes hacer algo con el objeto creado, como enviarlo a un servicio
    // En CrearInventarioOperadorComponent
this.inventarioService.crearInventarioOperador(nuevoInventario, this.operadorRegistrado.token).subscribe({
  next: (res) => {
    console.log('Alimento creado:', res);
    this.inventarioCreado.emit();  // Emitir evento para recargar inventario
    this.cerrar.emit();  // Cerrar modal
  },
  error: (err) => {
    console.error('Error al crear alimento:', err);
  }
});


    return nuevoInventario;
  }
  return null;
}





  cerrarModal() {
    this.cerrar.emit();
  }
}
