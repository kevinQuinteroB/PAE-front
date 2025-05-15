import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuejaService } from '../services/queja.service';
import { User } from '../models/user';

@Component({
  selector: 'app-crear-queja',
  standalone: false,
  templateUrl: './crear-queja.component.html',
  styleUrl: './crear-queja.component.css'
})
export class CrearQuejaComponent {
   @Output() cerrar = new EventEmitter<void>();
  @Output() quejaCreada = new EventEmitter<void>();

  colegioRegistrado!: User;
  nuevaQueja = {
    comment: '',
    status: '',
    idOrden: null // Aquí se referenciaría a una orden existente
  };

  constructor(
    private userService: UserService,
    private quejaService: QuejaService
  ) {}

  ngOnInit() {
    this.colegioRegistrado = this.userService.getUser();
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  agregarQueja() {
    const queja = {
      ...this.nuevaQueja,
      user: {
        idUser: this.colegioRegistrado.id
      }
    };

    this.quejaService.crearQueja(queja, this.colegioRegistrado.token).subscribe({
      next: (res) => {
        console.log('Queja creada:', res);
        this.nuevaQueja = { comment: '', status: '', idOrden: null };
        this.quejaCreada.emit();
        this.cerrar.emit();
      },
      error: (err) => {
        console.error('Error al crear queja:', err);
      }
    });
  }

}
