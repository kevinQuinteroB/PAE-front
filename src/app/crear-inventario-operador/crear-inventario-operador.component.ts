import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../models/food';

@Component({
  selector: 'app-crear-inventario-operador',
  standalone: false,
  templateUrl: './crear-inventario-operador.component.html',
  styleUrl: './crear-inventario-operador.component.css'
})
export class CrearInventarioOperadorComponent {

  @Input() alimentosDisponibles: Food[] = [];  // Array con los alimentos disponibles
  @Output() cerrar = new EventEmitter<void>();

  productoSeleccionado: string = '';  // Producto seleccionado
  descripcionSeleccionada: string = '';  // Descripción seleccionada
  descripcionesDisponibles: string[] = [];  // Descripciones disponibles para el producto seleccionado
  productosUnicos: string[] = [];  // Lista de productos únicos (sin duplicados)
  cantidad: number = 1;
  ngOnInit() {
    this.obtenerProductosUnicos();
  }

  // Método para obtener los productos únicos
  obtenerProductosUnicos() {
    const nombresProductos = this.alimentosDisponibles.map(food => food.name);
    this.productosUnicos = [...new Set(nombresProductos)];  // Usamos Set para eliminar duplicados
  }

  // Filtrar las descripciones según el producto seleccionado
  filtrarDescripciones() {
  if (this.productoSeleccionado) {
    // Filtramos todos los productos con el mismo nombre
    const productosFiltrados = this.alimentosDisponibles.filter(item => item.name === this.productoSeleccionado);

    // Extraemos todas las descripciones de esos productos
    const descripcionesSet = new Set<string>();
    productosFiltrados.forEach(item => {
      if (Array.isArray(item.description)) {
        item.description.forEach(desc => descripcionesSet.add(desc));
      } else {
        descripcionesSet.add(item.description);
      }
    });

    // Convertimos el Set a un array
    this.descripcionesDisponibles = Array.from(descripcionesSet);
  }
}

  cerrarModal() {
    this.cerrar.emit();
  }
}
