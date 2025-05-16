import { Component } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service';
import { UserService } from '../services/user.service';
import { Estudiante } from '../models/estudiante';
import { User } from '../models/user';

@Component({
  selector: 'app-crear-estudiante',
  standalone: false,
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent {
  estudiantes: Estudiante[] = [];
  colegioRegistrado!: User;

  constructor(
    private estudianteService: EstudianteService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.colegioRegistrado = this.userService.getUser();

    if (this.colegioRegistrado) {
      this.cargarEstudiantes();
    }
  }

  cargarEstudiantes(): void {
    const token = this.colegioRegistrado.token;
    const institucionId = this.colegioRegistrado.id;
    this.estudianteService.obtenerEstudiantes(token, institucionId).subscribe({
      next: (data) => {
        console.log('Estudiantes:', data);
        this.estudiantes = data;
      },
      error: (err) => {
        console.error('Error cargando estudiantes', err);
      }
    });
  }
}
