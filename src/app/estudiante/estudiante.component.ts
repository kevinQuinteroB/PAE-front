import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EstudianteService } from '../services/estudiante.service';
import { Estudiante } from '../models/estudiante';
import { User } from '../models/user';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  standalone: false,
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  colegioRegistrado!: User;
  showModal: boolean = false;
  nuevoEstudiante: Estudiante = {
    name: '',
    lastName: '',
    grade: '',
    user: { idUser: 0 }
  };

  constructor(
    private userService: UserService,
    private estudianteService: EstudianteService
  ) {}

  ngOnInit() {
    this.colegioRegistrado = this.userService.getUser();
    console.log('Token:', this.colegioRegistrado.token);
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    this.estudianteService.listarEstudiantesPorEscuela(this.colegioRegistrado.token, this.colegioRegistrado.id).subscribe(
      (data: Estudiante[]) => {
        this.estudiantes = data;
      },
      (error) => {
        console.error('Error al obtener estudiantes:', error);
      }
    );
  }

  abrirModal() {
    this.showModal = true;
    this.nuevoEstudiante = {
      name: '',
      lastName: '',
      grade: '',
      user: { idUser: this.colegioRegistrado.id }
    };
  }

  cerrarModal() {
    this.showModal = false;
  }

  crearEstudiante() {
    if (!this.nuevoEstudiante.name || !this.nuevoEstudiante.lastName || !this.nuevoEstudiante.grade) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    this.estudianteService.crearEstudiante(this.nuevoEstudiante, this.colegioRegistrado.token).subscribe({
      next: (res: Estudiante) => {
        console.log('Estudiante creado:', res);
        this.estudiantes.push(res);
        this.cerrarModal();
      },
      error: (err) => {
        console.error('Error al crear estudiante:', err);
        alert('Error al crear estudiante. Por favor, intenta de nuevo.');
      }
    });
  }

  eliminarEstudiante(estudiante: Estudiante) {
    if (!estudiante.id) {
      console.error('Estudiante sin id:', estudiante);
      return;
    }
    if (confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
      this.estudianteService.eliminarEstudiante(estudiante.id, this.colegioRegistrado.token).subscribe({
        next: () => {
          console.log('Estudiante eliminado:', estudiante.id);
          this.estudiantes = this.estudiantes.filter(e => e.id !== estudiante.id);
        },
        error: (err) => {
          console.error('Error al eliminar estudiante:', err);
          alert('Error al eliminar estudiante. Por favor, intenta de nuevo.');
        }
      });
    }
  }
}