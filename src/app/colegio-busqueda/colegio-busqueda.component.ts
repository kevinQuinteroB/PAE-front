import { Component } from '@angular/core';
import { Complaint} from '../models/queja';
import { QuejaService } from '../services/queja.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-colegio-busqueda',
  standalone: false,
  templateUrl: './colegio-busqueda.component.html',
  styleUrl: './colegio-busqueda.component.css'
})
export class ColegioBusquedaComponent {
  user: User | null = null;
  ordenes: Order[] = [];
  token!: string;

constructor(
    private quejaService: QuejaService,
    private userService: UserService, 
    private ordenServide:OrderService
  ){}


   colegioRegistrado!: User;
  ngOnInit() {
  this.colegioRegistrado = this.userService.getUser();
  console.log('Token:', this.colegioRegistrado.token);
  this.quejaService.listarOrdenesPorEscuela(this.colegioRegistrado.token,this.colegioRegistrado.id).subscribe(
          (data: Order[]) => {
              this.ordenes = data;
            },
            (error) => {
              console.error('Error al obtener inventario:', error);
            }
  );
    
  }
actualizarEstado(ordenes: Order) {
    // Cambiar el estado local
    ordenes.status = 'RECIBIDA';

    // Enviar la orden actualizada al backend para persistir
    this.ordenServide.updateOrder(ordenes,this.colegioRegistrado.token).subscribe({
      next: (orderActualizada) => {
        console.log('Orden actualizada:', orderActualizada);
        // Opcionalmente actualizar la orden local con la respuesta
        Object.assign(ordenes, orderActualizada);
      },
      error: (err) => {
        console.error('Error al actualizar orden:', err);
        alert('No se pudo actualizar el estado, intenta de nuevo.');
        // Revertir cambio local si hay error
        ordenes.status = 'enviada'; // o estado anterior guardado
      }
    });
  }

}
