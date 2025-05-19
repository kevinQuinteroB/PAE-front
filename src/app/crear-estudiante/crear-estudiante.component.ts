import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service';
import { UserService } from '../services/user.service';
import { Estudiante } from '../models/estudiante';
import { User } from '../models/user';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  standalone: false,
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  estudianteActual: Estudiante = this.nuevoEstudiante();
  colegioRegistrado!: User;
  editando: boolean = false;
  token: string = '';

  constructor(
    private estudianteService: EstudianteService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.colegioRegistrado = this.userService.getUser();

    if (!this.colegioRegistrado || !this.colegioRegistrado.token) {
      console.error('No hay usuario autenticado o token ausente');
      return;
    }

    this.token = this.colegioRegistrado.token;
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    const institucionId = this.colegioRegistrado.id;
    this.estudianteService.obtenerEstudiantes(this.token, institucionId).subscribe({
      next: (data) => {
        this.estudiantes = data;
      },
      error: (err) => {
        console.error('Error cargando estudiantes', err);
      }
    });
  }

  guardarEstudiante(): void {
    if (!this.estudianteActual.name || !this.estudianteActual.lastName || !this.estudianteActual.grade) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.estudianteActual.schoolId = this.colegioRegistrado.id;

    const accion = this.editando
      ? this.estudianteService.actualizarEstudiante(this.estudianteActual, this.token)
      : this.estudianteService.crearEstudiante(this.estudianteActual, this.token);

    accion.subscribe({
      next: () => {
        this.cargarEstudiantes();
        this.estudianteActual = this.nuevoEstudiante();
        this.editando = false;
      },
      error: (err) => {
        console.error('Error guardando estudiante', err);
        alert('Error guardando estudiante. Verifica si tienes permisos o si el token expiró.');
      }
    });
  }

  editarEstudiante(estudiante: Estudiante): void {
    this.estudianteActual = new Estudiante(
      estudiante.name,
      estudiante.lastName,
      estudiante.grade,
      estudiante.id,
      estudiante.schoolId
    );
    this.editando = true;
  }

  eliminarEstudiante(id?: number): void {
    if (id === undefined) {
      console.warn('ID indefinido para eliminar estudiante');
      return;
    }

    if (confirm('¿Estás seguro de eliminar este estudiante?')) {
      this.estudianteService.eliminarEstudiante(id, this.token).subscribe({
        next: () => this.cargarEstudiantes(),
        error: (err) => {
          console.error('Error eliminando estudiante', err);
          alert('Error eliminando estudiante. Verifica si tienes permisos.');
        }
      });
    }
  }

  cancelarEdicion(): void {
    this.estudianteActual = this.nuevoEstudiante();
    this.editando = false;
  }

  private nuevoEstudiante(): Estudiante {
    return new Estudiante('', '', '');
  }
}
