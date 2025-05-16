import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.css']
})
export class ListarEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  institucionId: number = 1; // Cambiar por el id real o obtener dinámicamente

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    const token = 'tu-token-aqui'; // Obtén el token real de donde lo guardes
    this.estudianteService.obtenerEstudiantes(token, this.institucionId).subscribe({
      next: (data) => {
        this.estudiantes = data;
      },
      error: (err) => {
        console.error('Error cargando estudiantes', err);
      }
    });
  }
  
}
