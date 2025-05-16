import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuejaService } from '../services/queja.service';
import { User } from '../models/user';
import { Order } from '../models/order';

@Component({
  selector: 'app-crear-queja',
  standalone: false,
  templateUrl: './crear-queja.component.html',
  styleUrl: './crear-queja.component.css'
})
export class CrearQuejaComponent {
   @Output() cerrar = new EventEmitter<void>();
  @Output() quejaCreada = new EventEmitter<void>();
    // Variable para almacenar la fecha seleccionada
  hoy: string = new Date().toISOString().split('T')[0];
  colegioRegistrado!: User;
  nuevaComplaint= {
    comment: '',
    status: '',
    creationDate: '',
       order: {
      idOrder: 0
    }
  
  };

  constructor(
    private userService: UserService,
    private quejaService: QuejaService
  ) {}
  ordenes: Order[] = [];
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

  cerrarModal() {
    this.cerrar.emit();
  }

  agregarQueja() {

        // Validar que todos los campos estén llenos
  if (!this.nuevaComplaint.comment || !this.nuevaComplaint.status || !this.nuevaComplaint.creationDate || this.nuevaComplaint.order.idOrder === 0) {
    alert('Por favor, completa todos los campos.');
    return;
  }
  const Complaint= {
    comment: this.nuevaComplaint.comment,
    status: this.nuevaComplaint.status,
    creationDate: this.nuevaComplaint.creationDate,
    order: {
      idOrder: Number(this.nuevaComplaint.order.idOrder)
    },
    school: {
      idUser: this.colegioRegistrado.id
    }
  };
    console.log('Token enviado:', this.colegioRegistrado.token);
    console.log('Complaintenviada:', Complaint);
    this.quejaService.crearQueja(Complaint, this.colegioRegistrado.token).subscribe({
      next: (res) => {
        console.log('Complaintcreada:', res);
        this.nuevaComplaint= { comment: '', status: '' , creationDate:" ",order: {
    idOrder: 0
  }};
        this.quejaCreada.emit();
        this.cerrar.emit();
      },
      error: (err) => {
        console.error('Error al crear queja:', err);
      }
    });
  }

}
